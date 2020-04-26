import { filter, find, first, includes, map, uniq } from 'lodash';

function getVoices() {
  return new Promise(function (resolve) {
    const synth = window.speechSynthesis;
    const id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices());
        clearInterval(id);
      }
    }, 10);
  });
}

export async function enableVoices() {
  const userLang = window.navigator.language;
  const allVoices = await getVoices();
  const allLangs = uniq(map(allVoices, (voice) => voice.lang));
  const languagesSelect = document.getElementById('voice-languages-select');
  const voiceSelect = document.getElementById('voice-voices-select');
  const sayButton = document.getElementById('voice-speak-btn');
  const phraseInput = document.getElementById('voice-phrase');
  let selectedVoice;

  function selectLanguage() {
    const selectedLang = languagesSelect.value;
    const langVoices = filter(allVoices, (voice) => voice.lang === selectedLang);
    voiceSelect.innerHTML = '';
    langVoices.forEach((voice) => {
      const opt = document.createElement('option');
      opt.value = voice.voiceURI;
      opt.appendChild(document.createTextNode(voice.name));
      voiceSelect.appendChild(opt);
    });
    selectedVoice = first(langVoices);
  }

  languagesSelect.addEventListener('change', selectLanguage);

  voiceSelect.addEventListener('change', ($event) => {
    selectedVoice = find(allVoices, (voice) => voice.voiceURI === $event.target.value);
  });

  sayButton.addEventListener('click', () => {
    const message = new SpeechSynthesisUtterance();
    message.text = phraseInput.value;
    message.voice = selectedVoice;
    speechSynthesis.speak(message);
  });

  allLangs.forEach((lang) => {
    const opt = document.createElement('option');
    opt.appendChild(document.createTextNode(lang));
    opt.value = lang;
    languagesSelect.appendChild(opt);
  });
  if (includes(allLangs, userLang)) {
    languagesSelect.value = userLang;
    selectLanguage();
  }
}
