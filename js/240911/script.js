console.log("=== 전개 구문 ===");
console.log("1. 배열의 전개 구문");
const fruits = ["사과", "파인애플", "수박"];
const vegetables = ["당근", "오이", "양파"];
const food = [...fruits, ...vegetables];
console.log(food); // concat과 유사한 역할

const fruits2 = [...fruits]; // 얕은 복사
fruits.push("망고");
console.log("fruits", fruits);
console.log("fruits2", fruits2);

console.log("2. 객체의 전개 구문");
const weniv1 = { gary: 1, binky: 2 };
const weniv2 = { licat: 3, gary: 4 };
const weniv = { ...weniv1, ...weniv2 }; // key가 중복되면 마지막에 오는 값을 가진다.
console.log(weniv);

const weniv3 = { ...weniv1 };
weniv1.binky = 5;
console.log(weniv1);
console.log(weniv3);

console.log("=== 구조 분해 할당 ===");
console.log("1. 기존의 구조 분해 할당 방식");
const categories = { food1: "과일", food2: "채소", food3: "육류" };
let food1, food2, food3;
food1 = categories.food1;
food2 = categories.food2;
food3 = categories.food3;
console.log(food1, food2, food3);

{
  console.log("2. 구조 분해 할당");
  const { food1, food2, food3 } = {
    food1: "과일",
    food3: "육류",
    food4: "생선",
  };
  console.log(food1, food2, food3);
  // console.log(key1, key2, key3);
}
