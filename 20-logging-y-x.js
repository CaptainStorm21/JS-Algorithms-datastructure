// (function () {
//   var x = (y = 200);
// })();

// console.log("y: ", y);
// console.log("x: ", x);


‘use strict’;
(function() {
  var x = y = 200;
})();
 
console.log('y: ', y);
//200
console.log('x: ', x);
//undefined --- we cannot access  x from iff

