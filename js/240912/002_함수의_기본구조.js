// f(x) = x^2 + x + 1;

function 라면끓이기() {
  console.log("---------------------");
  let 라면그릇;

  console.log("물 550ml를 끓인다");
  console.log("분말 스프와 후레이크를 먼저 넣습니다");
  console.log("면을 넣고 4분을 끓입니다");

  라면그릇 = "맛있는 라면";
  return 라면그릇;
}

// console.log(라면끓이기());
// console.log(라면끓이기());
// console.log(라면끓이기());

console.log("===== 함수의 구조 =====");
function sum(num1 = 0, num2 = 0) {
  // 매개변수(파라미터)
  return num1 + num2;
}
console.log(sum(10, 20)); // 전달인자(아규먼트)

function greeting(name) {
  console.log(`Hello, I'm ${name}`);
}
greeting("Licat");

console.log("=== 파라미터와 아규먼트의 특징 ===");
console.log(sum(10, 20, 30, 40)); // 파라미터 < 아규먼트 : 초과된 아규먼트는 무시
console.log(sum(50)); // num1(50), num2(undefined)
// -> 50 + undefined == NaN

console.log("=== 값에 의한 전달 ===");
// 타입 (1) 원시타입 (2) 객체타입
function add(num) {
  num += 10;
  console.log(num);
}
let a = 10;
add(a);
console.log(a);

function getJob(obj) {
  obj.company = "weniv";
  obj = { name: "binky" };
  console.log(obj);
}
const user = {
  name: "licat",
  location: "jeju",
};
getJob(user);
console.log(user);

console.log("=== 3.반환값 ===");
// input -> 처리 -> output
// return 뒤에 반환값을 작성

function mul(a, b) {
  return a * b;
}
mul(10, 2);
console.log(mul(10, 2)); // console.log(20);

function sub(a, b) {
  console.log(`${a} - ${b} = ${a - b}`);
}
console.log(sub(10, 5)); // 반환값이 없는 경우: undefined

//
function printFunc(num) {
  console.log(num);
  return 100;
  console.log("Hello World!");
}
console.log(printFunc(200) + printFunc(300));

function returnIf(num) {
  if (isNaN(num)) return;

  // num이 NaN이 아닐 때 실행될 코드
}

// 로그인 하는 과정
// 1. 사용자의 id와 비밀번호 정보를 가져와야 합니다.
function getIdPw(id, pw) {
  console.log("사용자 정보 가져오기", id, pw);
}

// 2. 입력값 검증
function inputValidation(id, pw) {
  console.log("입력값의 유효성 검증");
}

// 3. 유저 정보를 가진 서버에 데이터를 전송
function sendUserInfo(id, pw) {
  console.log("유저 정보를 서버에 전송");
}

// 4.리다이렉트
function redirectMainPage() {
  console.log("로그인을 완료시키고 메인 페이지로 이동합니다.");
}

let id = "licat";
let pw = "1234";

// 로그인 프로세스
getIdPw(id, pw);
inputValidation(id, pw);
sendUserInfo(id, pw);
redirectMainPage();

// 사칙연산 함수
function sum(a, b) {
  // console.log(`${a} + ${b} = ${a + b}`);
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

console.log(sum(2, 5));
console.log(sum(3, 5));
console.log(sub(4, 5));

function calculator(operator, num1, num2) {
  let result;

  switch (operator) {
    case "+":
      result = sum(num1, num2);
      break;
    case "-":
      result = sub(num1, num2);
      break;
    case "*":
      result = mul(num1, num2);
      break;
    case "/":
      result = div(num1, num2);
      break;
    default:
      console.log("연산자가 잘못 입력되었습니다");
      return;
  }
  console.log(`${num1} ${operator} ${num2} = ${result}`);
  return result;
}
console.log(calculator("+", 5, 3));
console.log(calculator("-", 5, 3));
console.log(calculator("*", 5, 3));
console.log(calculator("/", 5, 3));
console.log(calculator("%", 5, 3));
