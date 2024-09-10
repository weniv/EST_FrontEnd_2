// 객체타입
const name = "licat"; // name -> "licat"

const user = {
  age: 30,
  name: "licat",
};
user.age = 20;
console.log(user);
// user -> 0x1234(참조) -> object{age:30, name:"licat"}

// 배열
const arr = [1, 2, 3, 4];
console.log(arr);
const arr2 = [1, 2, 3, "Hello", [0, 1, 2]];
console.log(arr2);

const arr3 = Array(2, 3, 4);
console.log(arr3);
const arr4 = Array(1); // [1]
console.log(arr4);

console.log("===== 요소 접근 =====");
// const arr = [1, 2, 3, 4];
console.log(arr[2]); // 3
console.log(arr[5]); // undefined

console.log("===== 배열의 길이 =====");
console.log(arr.length);

const str = "Hello";
str.length = 3;
console.log(str, str.length);

arr.length = 2;
console.log(arr);
arr.length = 5;
console.log(arr);

console.log("==== 다차원 배열 ====");
// 배열의 원소로 배열 -> 다차원 배열
const arr5 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
]; // 2차원 배열 -> 행렬
console.log(arr5[2][1]);
const arr6 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
]; // 3차원 배열
console.log(arr6[0][1][0]); // 3

// 배열의 메서드
console.log("===== 배열의 추가 삭제 =====");
console.log("----- push & pop -----");
const array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array);

console.log("push로 반환되는 값은?", array.push(7, 8, 9)); // 배열의 길이
console.log(array);

const elem = array.pop(); // (제거된) 마지막 요소
console.log(array);
console.log(elem);

console.log("----- unshift & shift -----");
const length = array.unshift(10, 20, 30); // 추가된 후에 배열의 길이
console.log(array);
console.log(length);

const elem2 = array.shift(); // 맨 앞의 요소를 제거
console.log(array);
console.log(elem2);

console.log("---- splice -----");
const spliceArr = [1, 2, 3, 4, 5];
// [1,2,3,4,5] => [1,2,4,5]
spliceArr.splice(2, 1);
console.log(spliceArr); // 요소 제거

//[1,2,4,5] -> [1, 2, 10, 20, 5]
spliceArr.splice(2, 1, 10, 20);
console.log(spliceArr); // 요소 교체

// [1, 2, 10, 20, 5] -> [1, 2, 10, 20, 30, 5]
spliceArr.splice(4, 0, 30);
console.log(spliceArr); // 요소 추가

console.log("===== slice =====");
const sliceArr = [
  "apple",
  "banana",
  "cherry",
  "durian",
  "elderberry",
  [0, 1, 2],
];
// ['banana', 'cherry']
console.log(sliceArr.slice(1, 3)); // 시작인덱스 <= 요소 < 종료인덱스
console.log(sliceArr);

// 얕은 복사
const sliceCopyArr = sliceArr.slice(); // 처음부터 끝까지
sliceArr[5].push(3);
console.log("sliceArr", sliceArr);
console.log("sliceCopyArr", sliceCopyArr); // 원소인 객체는 동일

console.log("--- 얕은복사 ---");
const original = [10, 20, 30, [10, 20]];
const copy = original.slice(); // copy [10, 20, 30, [10, 20]];
original[3][1] = 30;
console.log(copy);

// 배열의 정렬
const sortArr = ["사과", "바나나", "수박", "딸기", "포도"];
console.log(sortArr.sort()); // 사전식

// const sortNumArr = [3, 1, 8, 6];
const sortNumArr = [23, 5, 1000, 42]; // 오름차순 정렬X
console.log(sortNumArr.sort()); // 문자열로 변환 '1000', '23'
// 유니코드 포인트에 따라서 정렬이 발생

// 비교함수
console.log(
  sortNumArr.sort((a, b) => {
    // 반환값에 따라서 정렬을 결정
    // 음수 -> a b 순서로 정렬
    // 양수 -> b a 순서로 정렬
    // 0 -> 두 자리를 변경X
  })
);
console.log(
  "오름차순",
  sortNumArr.sort((a, b) => a - b)
); // 오름차순
console.log(
  "내림차순",
  sortNumArr.sort((a, b) => b - a)
); // 내림차순

console.log("--- indexOf ---");
const indexArr = [1, 2, 3, 4, 2, 3, 5, 6];
console.log(indexArr.indexOf(3)); // 2
console.log(indexArr.indexOf(3, 5)); // 5
console.log(indexArr.indexOf(10)); // -1

console.log("--- includes ---");
const includeArr = ["Hello", " hello", "weniv", "WENIV"];
console.log(includeArr.includes("Hello")); // true
console.log(includeArr.includes("HELLO")); // false
