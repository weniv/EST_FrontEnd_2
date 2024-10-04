
class Pizza {
    constructor() {
        this.pos = new Tile(10, 20);
    }

    renderPizza() {
        this.pos.renderImg();
    }


    movePizza() {
        // 0 ~ 0.99999... 까지의 랜덤한 수
        // -2를 해주는 이유는 피자가 마지막 타일에 생기면 먹을 수 없기 때문
        // 10개의 타일이 깔려 있다고 가정했을 때, 8을 곱하면 0 ~ 7. 거기에 1을 더해서 1 ~ 8
        // 8로 새로운 타일을 생성하면 타일의 xPos 혹은 yPos 는 80 으로 마지막 타일 바로 직전 줄에 생성
        const col = Math.floor(Math.random() * (tileWidth - 2)) + 1;
        const row = Math.floor(Math.random() * (tileHeight - 2)) + 1;
        this.pos = new Tile(col, row);
    }
}