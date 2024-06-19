#!/usr/bin/node
exports.callMeMoby = function (a, theFunction) {
  for (let count = 0; count < a; count++) theFunction();
};
