import $ from 'jquery';
import { camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase } from 'lodash';

function applyCase() {
  const text = $('#case-source-input').val();
  if (!text) {
    $('#case-alert-warning').show();
    setTimeout(() => {
      $('#case-alert-warning').hide();
    }, 8000);
  }
  const targetCase = $('#case-target-select').val();
  if (!targetCase) {
    $('#case-alert-danger').show();
    setTimeout(() => {
      $('#case-alert-danger').hide();
    }, 8000);
  }

  if (text && targetCase) {
    $('.alert').hide();
    const $target = $('#case-target-input');
    switch (targetCase) {
      case 'camelCase':
        $target.val(camelCase(text));
        break;
      case 'kebabCase':
        $target.val(kebabCase(text));
        break;
      case 'lowerCase':
        $target.val(lowerCase(text));
        break;
      case 'snakeCase':
        $target.val(snakeCase(text));
        break;
      case 'startCase':
        $target.val(startCase(text));
        break;
      case 'upperCase':
        $target.val(upperCase(text));
        break;
      default:
    }
  }
}

export async function enableCases() {
  $('.alert').hide();
  $('#case-apply-btn').click(applyCase);
}
