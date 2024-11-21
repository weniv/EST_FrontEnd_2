// 1. **기본 동작**

//     입금, 출금, 계좌간 송금, 잔액조회(잔액은 최소한의 금액이 필요합니다.)

// 2. **이자 확인**

//     이자는 최대값에 제한이 있습니다. (예를 들어 이자가 1%이고, 최대값이 100만원일때, 120만원이 게좌에 있어도 여전히 100만원의 1%만 이자로 받습니다. 돈이 너무 많아서 이자가 무한대로 커지는 것을 막기 위함입니다.)

// 3. **즐겨찾기 계좌 관리하기**

//     내가 즐겨찾는 계좌 리스트를 볼 수 있고, 계좌를 추가할 수 있으며, 게좌를 제거할 수 있습니다.



class BankAccount {
    private balance: number;
    private interestRate: number; // 소수점자리수를 사용합니다. (0.1 === 10%)
    private interestCeiling: number;
    private id: number;
    private favoriteAccounts: BankAccount[] = [];

    constructor(id: number, balance: number, interestRate: number, interestCeiling: number) {
        this.id = id;
        this.balance = balance;
        this.interestRate = interestRate;
        this.interestCeiling = interestCeiling;
    }


    // 입금 메서드
    deposite(amount: number): void {
        this.balance += amount;
    }

    // 출금 메서드
    withDraw(amount: number): void {
        // 잔액 검증    
        if (this.balance - amount < 0) {
            throw new Error('잔액이 부족합니다!');
        }

        this.balance -= amount;
    }

    // 잔액 확인
    getBalance(): number {
        return this.balance;
    }

    // 월별 이자율 확인 
    getMonthlyInterest(): number {

        // 잔액이 이자 상한선 값보다 크다면
        if (this.balance > this.interestCeiling) {
            return this.interestCeiling * this.interestRate;
        } else {
            return this.balance * this.interestRate;
        }
    }

    // 송금
    transferMoney(amount: number, account: BankAccount): void {
        this.withDraw(amount);
        account.deposite(amount);
    }


    // 즐겨찾기 계좌 추가
    addAccountToFavorites(account: BankAccount): void {
        this.favoriteAccounts.push(account);
    }

    // 즐겨찾기 목록 조회
    getFavoriteAccounts(): BankAccount[] {
        return this.favoriteAccounts;
    }

    // 즐겨찾기 계좌 삭제
    removeFavoriteAccountById(id: number): void {

        // const originalLength = this.favoriteAccounts.length;

        // // 전달한 ID와 값이 다른 계좌만 모아서 새로운 배열로 반환합니다.
        // this.favoriteAccounts = this.favoriteAccounts.filter((account) => id !== account.id);

        // // 삭제할 계좌가 없다
        // if (originalLength === this.favoriteAccounts.length) {
        //     throw new Error("즐겨찾기 계좌에서 해당 계좌를 찾을 수 없습니다!");
        // }

        const indexToRemove = this.favoriteAccounts.findIndex((account: BankAccount) => account.id === id);

        if (indexToRemove === -1) {
            throw new Error("즐겨찾기 계좌에서 해당 계좌를 찾을 수 없습니다!");
        }

        this.favoriteAccounts.splice(indexToRemove, 1);

    }
}

const account1 = new BankAccount(1, 10000, 0.01, 50000);
const account2 = new BankAccount(2, 30000, 0.01, 50000);

account1.addAccountToFavorites(account2);

console.log(account1.getFavoriteAccounts());

account1.removeFavoriteAccountById(2);

console.log(account1.getFavoriteAccounts());