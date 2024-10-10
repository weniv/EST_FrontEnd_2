// __proto__


// 자바스크립트 믹스인
const sayHiMixin = {
    sayHi() {
        console.log('hi!!');
    },
    sayBye() {
        console.log('bye bye!!');
    }
};

const sayHiMixin2 = {
    sayHi2() {
        console.log('hi!!!!!!');
    },
    sayBye2() {
        console.log('bye bye!!!!!!!');
    }
};


class SuperUser {
    canWalk() {
        console.log('걷는다...');
    }
}

class User extends SuperUser {
    constructor(name) {
        super();
        this.name = name;
    }

    canTalk() {
        console.log('불라블라블라...');
    }
}

Object.assign(User.prototype, sayHiMixin);
Object.assign(User.prototype, sayHiMixin2);


const user = new User('재현');


for (let i = 0; i < 10; i++) { }