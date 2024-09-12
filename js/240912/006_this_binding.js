const licat = {
  name:'licat',
  age: 30,
  greeting(bf1, bf2) {
    console.log(`Hello ${bf1} and ${bf2}, I'm ${this.name}`)
  }
}
const wade = {
  name: 'wade',
  age: 30
}

licat.greeting('binky','mura'); // this -> licat

licat.greeting.call(wade, 'binky','mura'); // this 지정 
// licat.greeting안에 사용되는 this는 wade로 설정이 됩니다.

// function.call(지정할 this, 인자를 순서대로 작성)
licat.greeting.apply(wade, ['binky','mura'])

console.log('=== bind ===');

const wadeGreeting = licat.greeting.bind(wade)
wadeGreeting();