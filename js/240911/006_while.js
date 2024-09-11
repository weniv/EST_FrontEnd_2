console.log("=== while ===");

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// while이 종료될 때는 조건식이 False가 될 때!

console.log("=== do-while문 ===");
// 최소 한 번의 실행을 보장
i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

/*
let input;
do {
  input = window.prompt("숫자를 입력하세요");
} while (isNaN(input));
*/

// 사용자의 입력한 값이 '종료'일 때까지 입력을 받고, '종료'가 들어오면 지금까지 입력받은 모든 값을 출력하는 프로그램을 만들어주세요.

let inputs = []; // 입력값들의 목록
let input2;
do {
  input2 = window.prompt("입력하세요. (종료를 입력하면 입력이 종료됩니다)");
  inputs.push(input2);
} while (input2 !== "종료"); // 언제 반복을 계속하나요 -> 입력값이 종료가 아니라면
console.log(inputs);
