// 피자벌래 생성자
class Worm {
    constructor() {
        this.wormBody = [new Tile(13, 10), new Tile(13, 11), new Tile(13, 12)];
        this.dir = 'ArrowUp';
        this.dirNext = 'ArrowUp';
    }

    renderWorm() {
        this.wormBody.forEach((item) => {
            item.renderTile();
        })
    }

    // 충돌을 체크합니다.
    collisionCheck(wormHead) {
        // 게임 테두리에 해당하는 위치에 머리가 있는지 체크
        const leftEdge = (wormHead.col === 0);
        const topEdge = (wormHead.row === 0);

        // -1을 해주는 이유는 타일의 위치 기준점이 왼쪽 상단이기 때문
        const rightEdge = (wormHead.col === tileWidth - 1);
        const bottomEdge = (wormHead.row === tileHeight - 1);
        const collisionEdge = leftEdge || topEdge || rightEdge || bottomEdge;

        // 벌래의 몸통 위치에 머리가 있는지 체크
        let collisionBody;
        this.wormBody.forEach((item) => {
            if (wormHead.collisionCheck(item)) {
                collisionBody = true;
            }
        })

        // 충돌 결과를 반환합니다. 게임의 벽 혹은 자신의 몸통 둘 다 충돌하지 않았다면 마지막 falsy 값을 반환합니다.
        return collisionEdge || collisionBody;
    }

    // 벌래가 이동합니다
    moveWorm() {
        // 벌래의 현재 머리
        const head = this.wormBody[0];
        // 이동에 따른 새로운 벌래의 머리
        let newHead;

        // 다음 방향으로 벌래를 컨트롤합니다.
        this.dir = this.dirNext;

        // 이동 방향에 따른 벌래의 머리 랜더링 위치 설정. 기존 머리가 있던 위치에서 위, 아래, 왼쪽, 오른쪽으로 새로운 머리가 생성됩니다.
        if (this.dir === "ArrowRight") {
            newHead = new Tile(head.col + 1, head.row);
        } else if (this.dir === "ArrowDown") {
            newHead = new Tile(head.col, head.row + 1);
        } else if (this.dir === "ArrowLeft") {
            newHead = new Tile(head.col - 1, head.row);
        } else if (this.dir === "ArrowUp") {
            newHead = new Tile(head.col, head.row - 1);
        }


        // 머리와 몸통이 충돌하면 게임오버입니다.
        if (this.collisionCheck(newHead)) {
            renderGameOver();
        }

        // 벌래의 머리에 새로운 머리를 추가합니다. 마치 이동하는것 처럼 보이게 됩니다.
        this.wormBody.unshift(newHead);

        // 머리와 피자가 충돌하면 1.점수가 올라갑니다 / 2. 피자가 새로운 위치로 이동합니다
        if (newHead.collisionCheck(pizza.pos)) {
            ctxBg.clearRect(0, 0, cWidth, cHeight);
            score++;
            pizza.movePizza();
        } else {
            // 사과를 먹지 못했다면 새로운 머리가 생성되었기 때문에 몸통 길이를 유지하기 위해서 꼬리를 하나 빼줍니다.
            this.wormBody.pop();
        }
    }

    // 사용자가 입력한 방향키를 체크해서 벌래의 다음 이동 방향을 결정합니다.
    checkDirection(dirKey) {
        console.log(dirKey);

        // 벌래는 진행 방향의 역 방향으로 바로 방향을 트는것이 불가능합니다. 때문에 그러한 입력이 들어오면 무시합니다.
        if (this.dir === "ArrowRight" && dirKey === "ArrowLeft") {
            return;
        } else if (this.dir === "ArrowDown" && dirKey === "ArrowUp") {
            return;
        } else if (this.dir === "ArrowLeft" && dirKey === "ArrowRight") {
            return;
        } else if (this.dir === "ArrowUp" && dirKey === "ArrowDown") {
            return;
        }

        this.dirNext = dirKey;
    }
}

