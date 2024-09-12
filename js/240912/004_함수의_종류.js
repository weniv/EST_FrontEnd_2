console.log("=== 함수를 선언하는 두 가지 방법 ===");

console.log("1. 함수의 선언문");
func1(10, 20);
function func1(x, y) {
  console.log("func1", x, y);
  return x + y;
}
func1(2, 3);

console.log("2. 함수 표현식");
// func2(30, 40);
const func2 = function (x, y) {
  console.log("func2", x, y);
  return x + y;
};
func2(3, 5);

console.log("=== 화살표 함수 ===");
const func3 = () => 10;

console.log("화살표함수: ", func3(10, 20));
console.log("화살표함수: ", func3(10));

console.log("callback");
const arr = [10, 20, 30, 40, 50];

arr.forEach((elem, index) => {
  console.log(elem, index);
});

// 다음 두 함수를 화살표 함수로 변환하세요
function multiply(a, b) {
  return a * b;
}
const multiplyArrow = (a = 1, b = 1) => a * b;
multiplyArrow(5, 10);

function squareRoot(num) {
  return num ** 0.5;
}
const squareRootArrow = (num) => num ** 0.5;
