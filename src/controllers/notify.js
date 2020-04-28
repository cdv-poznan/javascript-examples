import Push from 'push.js';
import $ from 'jquery';

function hideAlert() {
  $('#notify-alert').hide();
}

function showAlert() {
  $('#notify-alert').show();
}

export async function enableNotify() {
  hideAlert();
  const notifyButton = document.getElementById('notify-btn');

  notifyButton.addEventListener('click', () => {
    const notifyTitle = document.getElementById('notify-title-input').value;
    const notifyBody = document.getElementById('notify-body-input').value;
    const notifyTimeout = document.getElementById('notify-timeout-input').value;
    hideAlert();

    if (notifyTitle) {
      Push.create(notifyTitle, {
        body: notifyBody,
        timeout: notifyTimeout,
        onClick: function () {
          window.focus();
          this.close();
        },
      });
    } else {
      showAlert();
    }
  });
}
