console.log("===== JSON ====");
const arr = [1, 2, 3, 4, 5];
// int arr[5] = {1, 2, 3, 4, 5}

console.log("==== 1. JSON.parse ===");
const json = '{"result":true, "count":42}';
console.log(json.result);
const obj = JSON.parse(json);
console.log(obj);
console.log(obj.result);
console.log(obj.count);

console.log(JSON.parse("[10, 20, 30]"));
console.log(JSON.parse('"Hello"'));
console.log(JSON.parse("23"));
console.log(JSON.parse("true"));

const json2 = "[1, 2, [1, 2, 3]]";
console.log(JSON.parse(json2));

console.log("=== 2. JSON.stringify ===");
const user = {
  name: "licat",
  company: "weniv",
};
user.myself = user; // 순환참조
user.myself = null;

console.log(JSON.stringify(user));
console.log(typeof JSON.stringify(user));

const numbers = [10, 20, 30, 40];
console.log(JSON.stringify(numbers));

console.log("=== 3. 깊은 복사 ===");
const origin = [10, 20, 30, [40, 50]];
const copy = [...origin];
copy[3][0] = 10;
console.log("origin: ", origin);
console.log("copy: ", copy);

const deepCopy = JSON.parse(JSON.stringify(origin));
copy[3][0] = 40;
console.log("deepCopy: ", deepCopy);

console.log("=========================");
const 도서목록 =
  '[{"id":1,"title":"The Great Gatsby","author":"F. Scott Fitzgerald","year":1925,"genre":"Novel","available":true},{"id":2,"title":"To Kill a Mockingbird","author":"Harper Lee","year":1960,"genre":"Novel","available":false},{"id":3,"title":"1984","author":"George Orwell","year":1949,"genre":"Dystopian","available":true},{"id":4,"title":"Pride and Prejudice","author":"Jane Austen","year":1813,"genre":"Romance","available":true},{"id":5,"title":"The Catcher in the Rye","author":"J.D. Salinger","year":1951,"genre":"Novel","available":false}]';
const bookObject = JSON.parse(도서목록);
console.log(bookObject);

const result = bookObject
  .filter((book) => book.available)
  .map((book) => book.title);
console.log(result);

const result2 = [];
bookObject.forEach((book) => {
  book.available && result2.push(book.title);
});
console.log(result2);
