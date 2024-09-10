// Symbol
let symbol1 = Symbol();
let symbol2 = Symbol("name");
let symbol3 = Symbol("name");
console.log(symbol2 === symbol3);

console.log(symbol1);
console.log(symbol2);
console.log(symbol3);

const licat = {
  name: "라이캣",
  [symbol1]: "symbol1",
  [symbol2]: "symbol2",
  [symbol3]: "symbol3",
};
console.log(licat);
