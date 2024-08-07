// Fetches from URL and displays hello value in DIV#hello
// HTML tag using jQuery API (imports from <head> tag

$.ajax({
  url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
  type: 'POST',
  success: (translation) => {
    $('DIV#hello').text(translation.hello);
  },
  error: () => {
    console.log('This an error loading orders');
  }
});
