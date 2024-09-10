// 원시타입
// 숫자, 문자열

// 불리언
// confirm('Hello World'); // true / false
"Hello".includes("hello"); // true /false

// 비교 연산의 결과
let x = 10;
let y = 20;
console.log(x > y);
console.log(x == "10");
console.log(x === "10");

// 논리 연산
// and, or, not

// 1. and 논리곱 &&
console.log("===== 논리곱 ======");
// 두 피연산자가 true일 때만 true
console.log(`true && true >> ${true && true}`);
console.log(`true && false >> ${true && false}`);
console.log(`false && true >> ${false && true}`);
console.log(`false && false >> ${false && false}`);

let isRaining = true;
let hasUmbrella = false;

if (isRaining && hasUmbrella) {
  console.log("외출을 합니다");
} else {
  console.log("외출을 하지 않습니다");
}

// 2. or 논리합 ||
console.log("===== 논리합 ======");
// 두 피연산자가 false일 때만 false
console.log(`true || true >> ${true || true}`);
console.log(`true || false >> ${true || false}`);
console.log(`false || true >> ${false || true}`);
console.log(`false || false >> ${false || false}`);

isRaining = false;
let isSnowing = false;

if (isRaining || isSnowing) {
  console.log("외출을 하지 않습니다");
} else {
  console.log("외출을 합니다.");
}

// 3. not 논리부정 !
console.log("===== 논리부정 =====");
console.log(`!true >> ${!true}`);
console.log(`!false >> ${!false}`);
console.log(`!!true >> ${!!true}`);
console.log(`!!false >> ${!!false}`);

isRaining = false;
console.log(!isRaining);
console.log(!!isRaining);

// 논리부정을 두번 이용한 논리형변환
console.log(`!!23 >> ${!!23}`); // true
console.log(`!!'hello' >> ${!!"hello"}`); // true
console.log(`!!'' >> ${!!""}`); // false

if ("") {
  // 23 -> Truthy한 값
  // '' -> Falsy한 값
  console.log("True입니다!");
}
