console.log("=== 삼항 연산자 ===");
let score = 20;
const result = score > 30 ? "참 잘했어요!" : "조금 더 노력하세요!";
console.log(result);

score = 80;
let grade =
  score > 90
    ? "A"
    : score > 80
    ? "B"
    : score > 70
    ? "C"
    : score > 60
    ? "D"
    : "F";
/*
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
*/
console.log(`점수는 ${grade}`);

console.log("=== switch ===");
let gender = "F";
switch (gender) {
  case "M":
    console.log("남성");
  case "F":
    console.log("여성");
  default:
    console.log("기타");
}

const today = new Date();
console.log(today.getDay());
// 0 일, 1 월, 2 화, 3 수, 4 목, 5 금, 6 토
// 일치 연산을 이용한 비교 ===
switch (
  today.getDay() // 수요일 3
) {
  case 1:
    console.log("월요일입니다.");
    break;
  case 2:
    console.log("화요일입니다.");
    break;
  case 3:
    console.log("수요일입니다");
    break;
  case 4:
    console.log("목요일입니다");
    break;
  case 5:
    console.log("금요일입니다");
    break;
  case 6:
  case 0:
    console.log("주말입니다");
    break;
  default:
    console.log("잘못된 날짜가 입력되었습니다");
}

// 월 정보를 이용해서 계절을 출력하는 프로그램(switch문)
let month = today.getMonth() + 1; // today.getMonth() 0부터 11
month = 7;
switch (month) {
  case 3:
  case 4:
  case 5:
    console.log("봄");
    break;
  case 6:
  case 7:
  case 8:
    console.log("여름");
    break;
  case 9:
  case 10:
  case 11:
    console.log("가을");
    break;
  case 12:
  case 1:
  case 2:
    console.log("겨울");
    break;
  default:
    console.log("입력이 잘못되었습니다.");
}

const spring = [3, 4, 5];
const summer = [6, 7, 8];
const autumn = [9, 10, 11];
const winter = [1, 2, 12];
