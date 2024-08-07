// Toggles <header> HTML tag class when user clicks
// DIV#toggle_header using jQuery API

const head = $('header');

$('DIV#toggle_header').click(() => {
  header.toggleClass('red');
  header.toggleClass('green');
});
