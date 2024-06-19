#!/usr/bin/node
const size = Math.floor(Number(process.argv[2]));
if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let count = 0; count < size; count++) {
    let row = '';
    for (let a = 0; a < size; a++) row += 'X';
    console.log(row);
  }
}
