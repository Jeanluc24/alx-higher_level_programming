// Uses document.querySelector to update <header> element text
// colour to red (#FF0000) (imports from <head> tag)

#!/usr/bin/node
window.onload = () => {
  const head = document.querySelector('header');
  head.style.color = '#FF0000';
};
