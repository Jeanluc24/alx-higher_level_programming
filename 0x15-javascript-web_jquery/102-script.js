// GET "Hello" from URL in different languages using jQuery API:
// Language code: INPUT#language_code (ex: es, fr, en etc.),
// Translation GET: INPUT#language_code (ex: es, fr, en etc.),
// Translation REQ: INPUT#btn_translate >> user clicks,
// Translation RES: DIV#hello >> "Hello"

window.onload = () => {
    $('INPUT#btn_translate').click(() => {
      const langu = $('INPUT#language_code').val();
      $.ajax({
        url: 'https://fourtonfish.com/hellosalut/?lang=' + langu,
        type: 'POST',
        success: (translation) => {
          $('DIV#hello').text(translation.hello);
        },
        error: () => {
          console.log('There is an error loading orders');
        }
      });
    });
  };
