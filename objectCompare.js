//How to compare objects in js
const util = require('util');
let obj1={
    name:'Aliyan',
    age:28,
    isGood:true
}

let obj2={
    name:'Aliyan',
    age:28,
    isGood:true
}
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); 
console.log(JSON.stringify({a: obj1}) === JSON.stringify({a: obj2}));

// In node.js we can use "util.isDeepStrictEqual"


let obj3 = {
  foo: "bar",
  baz: [1, 2]
};

let obj4 = {
    baz: [1, 2],
    foo: "bar"
};

//console.log(obj3 = obj4); // false
console.log(obj3)
console.log(util.isDeepStrictEqual(obj3, obj4)); // true
console.log(util.isDeepStrictEqual(obj1, obj2)); // true
