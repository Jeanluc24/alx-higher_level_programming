// Fetches and replaces character name of URL
// of the character in the DIV#character tag text

$.ajax({
  url: 'https://swapi-api.alx-tools.com/api/people/5/?format=json',
  type: 'GET',
  success: (character) => {
    $('DIV#character').text(character.name);
  }
});
