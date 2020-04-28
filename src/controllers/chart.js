import { Chart } from 'chart.js';
import $ from 'jquery';

async function fetchData(country) {
  const res = await fetch(`https://api.covid19api.com/country/${country}/status/confirmed`);
  return res.json();
}

async function prepareData() {
  const poland = await fetchData('poland');
  const germany = await fetchData('germany');
  const italy = await fetchData('italy');

  return {
    labels: poland.slice(40).map((entry) => entry.Date.substr(0, 10).slice(5).replace('-', '.')),
    datasets: [
      {
        label: 'Poland',
        data: poland.slice(40).map((entry) => entry.Cases),
        borderColor: 'rgba(40, 167, 69, 0.8)',
      },
      {
        label: 'Germany',
        data: germany.slice(40).map((entry) => entry.Cases),
        borderColor: 'rgba(220, 53, 69, 0.8)',
        fill: true,
        steppedLine: false,
      },
      {
        label: 'Italy',
        data: italy.slice(40).map((entry) => entry.Cases),
        borderColor: 'rgba(255, 193, 7, 0.8)',
      },
    ],
  };
}

export async function enableChart() {
  const canvas = document.getElementById('chart-canvas');
  const context = canvas.getContext('2d');

  $('#chart-from-date-input').val('2020-03-01');
  $('#chart-to-date-input').val(new Date().toISOString().substr(0, 10));

  const config = {
    type: 'line',
    data: await prepareData(),
    options: {
      reponsive: true,
      title: {
        display: true,
        text: 'COVID-19 Cases in Europe in 2020',
      },
      legend: {
        display: false,
        position: 'bottom',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Date',
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Cases',
            },
          },
        ],
      },
    },
  };

  const chart = new Chart(context, config);

  $('#chart-poland-color').change(($event) => {
    chart.config.data.datasets[0].borderColor = $($event.currentTarget).val();
    chart.update();
  });

  $('#chart-germany-color').change(($event) => {
    chart.config.data.datasets[1].borderColor = $($event.currentTarget).val();
    chart.update();
  });

  $('#chart-italy-color').change(($event) => {
    chart.config.data.datasets[2].borderColor = $($event.currentTarget).val();
    chart.update();
  });
}
