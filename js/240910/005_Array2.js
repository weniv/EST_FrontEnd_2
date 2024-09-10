// 배열의 메서드2
const arr = ["a", "b", "c"];
arr.forEach(function (elem, index) {
  console.log(elem, index);
});

const fruitArr = ["참외", "키위", "감귤"];
const resultArr = [];
fruitArr.forEach((elem, index) => {
  resultArr.push(`${index}. ${elem}`);
});
console.log(fruitArr);
console.log(resultArr);

// forEach를 이용한 문제
const phoneNumbers = [
  "010-1234-5678",
  "02-987-6543",
  "031-456-7890",
  "010-8765-4321",
];
// 배열에서 전화번호 뒷자리만 출력하기
const lastDigits = [];
phoneNumbers.forEach((elem, index) => {
  console.log(elem.slice(-4));
  lastDigits.push(elem.slice(-4));
});
console.log(lastDigits);

// map
const mapArr = [1, 2, 3];
const newArr = mapArr.map(function (elem, index) {
  console.log(elem, index);
  return elem * index;
});
console.log(newArr);

const lastMapDigits = phoneNumbers.map((elem, index) => {
  return elem.slice(-4);
});
console.log(lastMapDigits);

const data = [
  {
    _id: "642ba3980785cecff3f39a8d",
    index: 0,
    age: 28,
    name: "Annette Middleton",
    gender: "female",
    company: "KINETICA",
  },
  {
    _id: "642ba398d0fed6e17f2f50c9",
    index: 1,
    age: 37,
    name: "Kidd Roman",
    gender: "male",
    company: "AUSTECH",
  },
  {
    _id: "642ba39827d809511d00dd8d",
    index: 2,
    age: 39,
    name: "Best Ratliff",
    gender: "male",
    company: "PRISMATIC",
  },
];
const ageArray = data.map((elem, index) => {
  return elem["age"];
});
console.log(ageArray);

console.log("=== for of ===");
const forOfArray = ["사과", "바나나", "오렌지"];

for (const 요소 of forOfArray) {
  console.log(요소);
  if (요소 === "바나나") break;
}

// filter
console.log("--- filter ---");
const filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수인 요소만 가지고 오기
const filteredArr = filterArr.filter((elem, index) => {
  console.log(elem, index);
  return !(elem % 2);
});
console.log(filteredArr);

// reduce
let reduceArr = [1, 2, 3, 4, 5];
console.log(`\nreduceArr: `, reduceArr);

console.log(
  reduceArr.reduce((a, c) => {
    console.log(`누적값: ${a}, 현재값: ${c}`);
    return a + c; // 10
  }, 0)
);

const mul = reduceArr.reduce((a, c) => {
  return a * c; // 곱
}, 1);
console.log(mul);

console.log("--- join ---");
const joinArr = ["hello", "world", "weniv"];
console.log(joinArr.join("-")); // split 메서드와 반대의 역할
console.log(joinArr.join()); // 기본 구분자(,)로 연결

const numbers = ["010", "1111", "2222"];
console.log(numbers.join("-"));
// 010(숫자) -> 8(십진수) -> 문자
// 8진수 0o 0o16 -> 14 // 0을 붙이면 8진수로 처리

console.log("--- concat ---");
const concatArr1 = [1, 2, 3];
const concatArr2 = [4, 5, 6];
const concatArr3 = [7, 8, 9];
console.log(concatArr1.concat(concatArr2, concatArr3));

const newConcatArr = concatArr1.concat();
concatArr1.push(4);
console.log(newConcatArr); // 얕은복사

{
  // 1. 배열에서 짝수인 경우, 제곱해서 합을
  // filter, map, reduce
  // ex) [1,2,3,4,5] -> [2, 4] -> [4, 16] -> 20

  const arr = [1, 2, 3, 4, 5, 6, 7, 8]; // 짝수인 경우만을
  console.log(
    arr
      .filter((elem, index) => {
        return !(elem % 2);
      })
      .reduce((a, c) => {
        return a + c ** 2;
      }, 0)
  );
}
