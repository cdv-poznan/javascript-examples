import { keys } from 'lodash';

export async function enableExchange() {
  const api = 'https://api.exchangerate-api.com/v4/latest/';
  async function getAvailableCurrencies() {
    const res = await fetch(api + 'USD');
    const data = await res.json();
    const currencies = keys(data.rates);
    return currencies;
  }
  const sourceCurrencySelect = document.getElementById('source-currency');
  const sourceValueInput = document.getElementById('source-value');
  const targetCurrencySelect = document.getElementById('target-currency');
  const targetValueInput = document.getElementById('target-value');

  const currencies = await getAvailableCurrencies();

  function fillSelect(target) {
    currencies.forEach((currency) => {
      const opt = document.createElement('option');
      opt.value = currency;
      opt.appendChild(document.createTextNode(currency));
      target.appendChild(opt);
    });
  }

  fillSelect(sourceCurrencySelect);
  fillSelect(targetCurrencySelect);

  document.getElementById('convert').addEventListener('click', async () => {
    const sourceCurrency = sourceCurrencySelect.value;
    const sourceValue = sourceValueInput.value;
    const targetCurrency = targetCurrencySelect.value;
    const url = api + sourceCurrency;

    const res = await fetch(url);
    const json = await res.json();

    const rate = json.rates[targetCurrency];
    const value = sourceValue * rate;

    targetValueInput.value = value.toFixed(2);
  });
}
