// **마법사 명세**

// 마법사는 불꽃마법과 얼음마법을 사용할 수 있습니다.

// 마법사는 마법책에 있는 마법의 이름을 통해 마법을 사용할 수 있습니다.


// **마법 명세**

// 마법은 추상클래스입니다.

// 마법은 고유한 이름이 있습니다.

// 마법 클래스를 상속하는 마법은 ‘주문(cast)’ 함수를 implement(구현) 해야합니다.


// **불꽃마법 명세**

// 불꽃마법은 ‘마법’을 상속받습니다.

// 불꽃마법은 50의 데미지를 입힙니다. 그리고 이 값은 변경할 수 없습니다.

// 불꽃마법의 이름은 정해져있습니다. (Fire Ball, Meteor Strike)

// 불꽃마법을 주문하면 마법의 이름과 데미지가 출력됩니다. (땡땡 마법이 발사됐습니다!, 데미지가 50 들어갔습니다!)



// **얼음마법 명세**

// 얼음마법은 ‘마법’을 상속받습니다.

// 얼음마법은 적의 속도를 50% 둔화시킵니다. 그리고 이 값은 변경할 수 없습니다.

// 얼음마법의 이름은 정해져있습니다. (Ice Spear, Frost Nova )

// 얼음마법을 주문하면 마법의 이름과 데미지가 출력됩니다. (땡땡 마법이 발사됐습니다!, 적의 속도를 50% 둔화시킵니다!)



abstract class Spell {
    #name: string

    constructor(name: string) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    abstract cast(): void;
}

// 불 마법과 얼음 마법의 이름을 열거형으로 정의
enum FireSpellName {
    FireBall = "Fire Ball",
    MeteorStrike = "Meteor Strike"
}

enum FrostSpellName {
    IceSpear = "Ice Spear",
    FrostNova = "Frost Nova"
}


class FireSpell extends Spell {
    readonly damage = 20;

    constructor(name: FireSpellName) {
        super(name);
    }

    cast() {
        console.log(`${this.name} 마법이 발사됐습니다!, 데미지가 ${this.damage} 들어갔습니다!`);
    }
}

class FrostSpell extends Spell {
    readonly slow = 0.5;

    constructor(name: FrostSpellName) {
        super(name);
    }

    cast() {
        console.log(`${this.name} 마법이 발사됐습니다!, 적의 속도를 ${this.slow}% 둔화시킵니다!`)
    }
}



class Wizard<S extends Spell> {
    #spellBook: S[] = [];

    constructor(spellBook: S[]) {
        this.#spellBook = spellBook;
    }

    // 마법의 이름을 통해서 마법을 찾아 발사합니다.
    castFromSpellBook(name: string) {
        // 마법의 이름으로 책안의 마법을 검색해서 있으면 실행, 없으면 에러   
        const spell = this.#spellBook.find((spell) => name === spell.name);

        if (spell) {
            spell.cast();
        } else {
            throw new Error('마법 책에 존재하지 않는 마법입니다!');
        }
    }
}


const frostSpells: FrostSpell[] = [new FrostSpell(FrostSpellName.IceSpear)];

const fireSpells: FireSpell[] = [new FireSpell(FireSpellName.MeteorStrike)];


const frostWizard = new Wizard(frostSpells);

const fireWizard = new Wizard(fireSpells);

frostWizard.castFromSpellBook("Ice Spear");

fireWizard.castFromSpellBook("Meteor Strike");