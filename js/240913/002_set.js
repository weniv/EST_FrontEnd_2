console.log("=== Set ===");
const s = new Set([10, 20, 30, 30, 20, 30]);
console.log(s);

console.log("=== 1. 값 추가하기 ===");
s.add(40);
s.add("Hello");
s.add("Hello");
s.add("Hello");
console.log(s);

let str = new Set("abceeeee");
console.log(str);
console.log(str.size);

console.log("=== 2. 값 확인하기 ===");
console.log(s.has(40)); // true
console.log(s.has(50)); // false

console.log("=== 3. 값 제거하기 ===");
console.log(s.delete("Hello"));
console.log(s.has("Hello")); // false
console.log(s);

console.log("=== 4. set 크기 정보 ===");
s.delete(10);
console.log(s.size);

console.log("=== 5. 초기화 ===");
s.clear();
console.log(s);
console.log(s.size);

console.log("=== 6. 배열과 변환 ===");
const fruits = ["apple", "banana", "mango", "banana"];
console.log(fruits);

const fruitsSet = new Set(fruits);
console.log(fruitsSet);

console.log(Array.from(fruitsSet));
console.log([...fruitsSet]);

console.log("=== 7. 배열의 중복된 요소 제거 ===");
const arr1 = [10, 20, 30, 10, 20, 40, 50];
const uniqueSet = new Set(arr1);
console.log([...uniqueSet]);

console.log("=== 8. 집합의 연산 ===");
// 두 개의 집합을 이용하는 연산
// 교집합, 합집합, 차집합
const setA = new Set(["사과", "바나나", "복숭아", "샤인머스캣", "딸기"]);
const setB = new Set(["딸기", "샤인머스캣", "키위", "용과"]);
console.log(setA);
console.log(setB);

console.log("1. 교집합 : 2개의 집합에서 공통되는 부분");
const intersection = setA.intersection(setB); // setA ∩ setB
console.log(intersection);

console.log("2. 합집합 : 두개의 집합의 모든 요소를 포함하는 집합");
const union = setA.union(setB); // setA ∪ setB
console.log(union);

console.log("3. 차집합 : 한 집합에서 다른 집합에 있는 요소를 제외한 집합");
const differenceA = setA.difference(setB); // setA - setB
console.log(differenceA);

const differenceB = setB.difference(setA); // setB - setA
console.log(differenceB);

console.log("\n\n\n\n\n\n\n\n\n");
