// var a; // undefined 초기화
// function sayHi() {
//   console.log("Say Hi");
// }
// let b; // 초기화X
console.log(a); // undefined
var a = "Hello";
console.log(a);

sayHi();
function sayHi() {
  console.log("Say Hi");
}

// console.log(b);
let b = "World";
//console.log(c);
const c = "Weniv";

console.log("=== 함수의 호이스팅 ===");
func1();
function func1() {
  console.log("func1");
}

// 함수표현식은 함수식의 호이스팅 X
// 할당된 변수의 호이스팅을 따라간다. -> 우리가 작성한 선언문 이전에는 호출이 불가
func2(); // undefined()
var func2 = function () {
  console.log("func2");
};
