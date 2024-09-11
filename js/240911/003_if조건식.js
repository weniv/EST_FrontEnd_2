// 조건문
let isGreen = false;
if (isGreen) {
  console.log("횡단보도를 건너세요!");
} else {
  console.log("멈추세요!");
}

console.log("--- if  ---");

// if 조건문
if (true) {
  console.log("이 코드는 항상 실행됩니다!");
}
if (false) {
  console.log("이 코드는 실행되지 않습니다.");
  console.log("이 코드는 실행되지 않습니다.");
  console.log("이 코드는 실행되지 않습니다.");
  console.log("이 코드는 실행되지 않습니다.");
}

let age = 24;
if (age > 20) {
  console.log("입장이 가능합니다.");
}

let name = "";
if (name) {
  console.log(`${name}님 안녕하세요`);
}

console.log("--- if - else ---");
name = "";
if (name) {
  console.log(`${name}님 안녕하세요`);
} else {
  console.log("이름을 입력하세요");
}

let x = 5;
let y = 10;

if (x === y) {
  console.log("x와 y가 같습니다");
} else {
  console.log("x와 y가 다릅니다");
}

x = 20;
y = 10;
if (x === y) {
  console.log("x와 y가 같습니다");
} else {
  if (x > y) {
    console.log("x가 y보다 큽니다");
  } else {
    console.log("x가 y보다 작습니다");
  }
}

console.log("---- else if ----");
if (x === y) {
  console.log("x와 y가 같습니다");
} else if (x > y) {
  console.log("x가 y보다 큽니다");
} else {
  console.log("x가 y보다 작습니다");
}

let score = 80;
let grade;

if (score > 90) {
  grade = "A";
} else if (score > 80) {
  // score가 90보다 작거나 같다
  grade = "B";
} else if (score > 70) {
  // score가 80보다 작거나 같다
  grade = "C";
} else if (score > 60) {
  // score가 70보다 작거나 같다
  grade = "D";
} else {
  // score가 60보다 작거나 같다
  grade = "F";
}
console.log(`점수는 ${grade}`);

// 월 정보에 따라 계절을 출력하는 프로그램을 작성
// 3, 4, 5 -> 봄 / 6, 7, 8 -> 여름 / 9, 10, 11 -> 겨울 / 12, 1, 2 -> 겨울
// if / else if / else 조건문을 이용해서 작성해주세요

let month = 9;
let season;

if (month < 1 || month > 12) {
  // 예외처리
  console.log("정확한 달을 입력해주세요");
} else if (month <= 5 && month >= 3) {
  season = "봄";
} else if (month <= 8 && month >= 6) {
  season = "여름";
} else if (month <= 11 && month >= 9) {
  season = "가을";
} else {
  season = "겨울";
}

console.log(`지금 계절은 ${season}입니다.`);

{
  const spring = [3, 4, 5];
  const summer = [6, 7, 8];
  const autumn = [9, 10, 11];
  const winter = [1, 2, 12];

  let month = 9;

  if (spring.includes(month)) {
    console.log("이번 달은 봄입니다.");
  } else if (summer.includes(month)) {
    console.log("이번 달은 여름입니다.");
  } else if (autumn.includes(month)) {
    console.log("이번 달은 가을입니다.");
  } else if (winter.includes(month)) {
    console.log("이번 달은 겨울입니다.");
  }
}
