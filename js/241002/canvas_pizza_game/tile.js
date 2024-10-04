// tile 생성자. 매개변수로 전달받는 값을 통해 열과 행 데이터를 가지는 타일을 생성합니다.
class Tile {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.posX = this.col * tileSize;
        this.posY = this.row * tileSize;
    }
    renderTile(bg = 'green') {
        ctx.fillStyle = bg;
        ctx.fillRect(this.posX, this.posY, tileSize, tileSize);
    }
    renderImg(bg = './pizza.png') {
        // img 요소를 만드는 생성자 함수입니다.
        const image = new Image(tileSize, tileSize);
        image.src = bg;
        image.addEventListener('load', () => {
            // drawImage : 이미지를 그립니다. 그려줄 이미지 요소, x축, y축 위치, 가로, 세로 사이즈를 전달합니다.
            ctxBg.drawImage(image, this.posX, this.posY, tileSize, tileSize);
        })
    }
    // 두 타일의 충돌을 체크합니다.
    collisionCheck(target) {
        // && 연산자는 첫번째 falsy 값을 가지는 피연산자 혹은 마지막 truthy 값을 가지는 피연산자를 반환합니다.
        return this.col === target.col && this.row === target.row;
    }
}
// 이제 우리가 원하는 위치에 상자를 그릴 수 있게 되었습니다.
