console.log("callback");
const arr = [10, 20, 30, 40, 50];

function callback(elem, index) {
  console.log(elem, index);
}
arr.forEach(callback);

function greeting(name, callback) {
  console.log(`안녕하세요 ${name}님!`);
  callback();
}

function sayGoodbye() {
  console.log("다음에 또 만나요!");
}

greeting("라이캣", sayGoodbye);
