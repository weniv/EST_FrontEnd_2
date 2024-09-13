console.log("=== 함수의 기본값 ===");
function defaultFunc(a = 10, b = 20, c = 30) {
  console.log(a, b, c);
  return a + b + c;
}

console.log(`>> `, defaultFunc()); // undefined undefined undefined
console.log(`>> `, defaultFunc(20));
console.log(`>> `, defaultFunc(100, undefined, 200));

console.log(`>> `, defaultFunc((b = 300), (c = 200))); // 530

console.log("===== 구조 분해 할당 =====");
function printUser(name, grade, company) {
  console.log(`이름: ${name}, 등급: ${grade}, 회사: ${company}`);
}
printUser("Licat", 3, "Weniv");

function printUser2({ name, grade, company } = {}) {
  console.log(`이름: ${name}, 등급: ${grade}, 회사: ${company}`);
}
printUser2({ name: "Licat", grade: 3, company: "Weniv" });
printUser2({ name: "Binky" });
printUser2();

console.log("RORO패턴");
function createUser({ name, email }) {
  let id = "100000";
  let grade = 0;
  return { id, name, grade, email };
}

const user = createUser({
  name: "licat",
  email: "licat@weniv.co.kr",
  type: "cat",
});
console.log(user);

function func(obj) {
  // obj에 대한 예외처리
  const { name, age } = obj;
  console.log(name, age);
  console.log(obj.level);
}

func({ name: "licat", age: 20, grade: 3, level: 20 });

console.log("=== 나머지 문법 ===");
function func1(a, b, c, ...rest) {
  console.log(a, b, c, rest);
}
func1(10, 20, 30, 40, 50, 60, 70);

function func2({ name, age, ...rest }) {
  console.log(name, age, rest);
}
func2({ name: "wade", age: 20, company: "weniv", level: 3 });

console.log("=== spread vs rest ===");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr = [...arr1, ...arr2];
console.log(arr);
