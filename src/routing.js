import $ from 'jquery';

export function enableRouting() {
  function setRoute() {
    $('.view').hide();
    const { hash } = window.location;
    const segments = hash.split('/');

    $(segments[0] || '#home').show();

    $('.nav-item.nav-link').removeClass('active');
    $(`.nav-item.nav-link[href="${hash}"]`).addClass('active');
  }
  setRoute();
  window.addEventListener('hashchange', setRoute);
}
