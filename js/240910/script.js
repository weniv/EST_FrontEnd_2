let a = 10;
let b = a;

console.log(a, b);
a = 20;
console.log(a, b);

let obj1 = { name: "licat", age: 30 };
let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2 = { name: "licat", age: 30 };
console.log(obj1 == obj2);
