// LI CRUD script for list when user clicks HTML tag using
// jQuery API: (imports from <HEAD> tag
// DIV#add_item (adds), DIV#remove_item (removes last element),
// DIV#clear_list (removes all elements)

window.onload = function () {
  const $myL = $('UL.my_list');

  $('DIV#add_item').click(() => {
    $myL.append('<li>Item</li>');
  });

  $('DIV#remove_item').click(() => {
    const thelastItem = $('UL.my_list LI').last();
    thelastItem.remove();
  });

  $('DIV#clear_list').click(() => {
    $myL.empty();
  });
};
