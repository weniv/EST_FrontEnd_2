console.log("=== 콜백함수 ===");
function func1() {
  return 100;
}
console.log(func1()); // 함수가 값으로 평가될 수 있다.

let x = func1();

console.log("=== 재귀함수 ===");
// factorial(n) = n * (n-1)* ... * 1 = n * factorial(n-1)
// !0 == 1 ,!1 == 1
// f(3) = 3*f(2)
// f(2) = 2*f(1)
// f(1) = 1*f(0)
// f(0) = 0*f(-1)

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));

// sigma(n) = n + sigma(n-1)

function sigma(n) {
  if (n <= 1) {
    return 1;
  }
  return n + sigma(n - 1);
}
console.log(sigma(5));
// sigma(5) == 15
// sigma(4) == 10
// sigma(3) == 6
// sigma(2) == 3
// sigma(1) == 1

console.log("=== 3. 즉시 실행 함수 ===");
// let, const

// 즉시 실행 함수
const result = (function funcIIFE() {
  let a = 1;
  let b = 2;
  return a + b;
})();
// funcIIFE();
console.log(result);

console.log("=== 4. 생성자 함수 ===");
const book = {
  title: "JavaScript Essentials",
  price: 15000,
  author: ["wade", "hati"],
};

function Book(title, price, author) {
  this.title = title;
  this.price = price;
  this.author = author;
  this.publish = "위니북스";
}
const book1 = new Book("JS", 15000, ["wade", "hati"]);
const book2 = new Book("HTML/CSS", 20000, ["rosy", "zeezee"]);

console.log(book1);
console.log(book2);

const book3 = Book("React", 18000, ["wade"]);
console.log(book3); // undefined
console.log(title, price, author, publish);
// window.title
// window.price
// window.author
// window.publish
