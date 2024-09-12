// "use strict";
console.log("=== 1. 전역 범위 ===");
console.log(this); // window 객체(전역 객체)

// 함수의 호출에 호출에 따라 this가 달라진다.
function func1() {
  console.log(this);
}

console.log('1. 일반 함수 호출')
func1(); // 전역 객체 (window)

console.log('2. 메서드 호출')
// 메서드로 호출을 할 때는 객체를 나타냅니다.
const obj = {
  name : 'obj',
  type:'object',
  func1: function(){
    console.log(`내 이름은 ${this.name}`)
  }, // func1 으로 축약 표현이 가능
}
obj.func1() // this는 obj

console.log('-----------------')
const obj2 = {
  name: 'obj2',
  type:'object',
  func1: function() {
    console.log('func1 ', this); // obj2

    function func2() {
      console.log('func2 ', this); // window
    }
    func2();
  }
}
obj2.func1()

console.log('-----func3------')
const func3 = obj2.func1
func3(); // 일반 함수로 호출

console.log('=== 3. 화살표 함수 ===')
const arrowFunction = () => {
  console.log(this);
}
arrowFunction(); // 전역 객체(window);

const obj3 = {
  name :'obj3',
  func1 :function () {
    // this는 obj3
    const arrowFunc = ()=> {
      console.log('arrowFunc', this) // obj3
    }
    const innerFunc = function () {
      console.log('innerFunc', this);
    }
    arrowFunc();
    innerFunc();
  }
}
obj3.func1();

const button = document.getElementById('click-btn')
console.log(button);
// button.addEventListener('click', function () {
//   // 이벤트 핸들러 함수
//   console.log('이벤트가 등록된 객체', this);
//   this.style.background = 'pink';
// })

button.addEventListener('click',  ()=> {
  // 이벤트 핸들러 함수
  console.log('이벤트가 등록된 객체', this); // 전역객체인 window
  //this.style.background = 'pink';
})

console.log('=== 4. 생성자 함수 ===')
function Person(name){
  // this = {}
  this.name = name;
  console.log(this);
  // return this
}
const person1 = new Person('hello'); // new Date()
console.log(person1);

console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n')