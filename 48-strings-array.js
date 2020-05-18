const data1 = "Jordan Smith";

//setting THIS context on call method
const data2 = [].filter.call(data1, function (elem, index) {
  return index > 6;
});

// only use 'read-only' methods: filter, forEach, map, some, every, etc.
// cannot use: push, pop, splice, shift, reverse, etc.

console.log(data2);

//use methods Array on strings
/*
read only
    filter
    forEach,
    map, 
    some, 
    every

    cannot use:
        push, 
        pop
        slice
        shift,
        reverse

*/