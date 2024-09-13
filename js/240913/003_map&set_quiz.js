// board 게시판에는 작성한 게시자의 정보가 담겨있습니다.
const board = ["라이캣", "라이캣", "라이캣", "빙키", "소울곰", "뮤라"];

// 1. 게시글을 작성한 사용자 수
const setBoard = new Set(board);
console.log(setBoard.size);

// 2. 각자 몇개의 게시글을 작성했는지 Map을 만들어주세요.
// {"라이캣" => 3, "빙키" => 1, "소울곰" => 1, "뮤라" => 1}

// 2-1. setBoard를 이용
["라이캣", "빙키", "소울곰", "뮤라"];

const mapUsingSet = new Map();
for (const name of setBoard) {
  console.log(name, board.filter((el) => el === name).length);
  mapUsingSet.set(name, board.filter((el) => el === name).length);
}
console.log(mapUsingSet);

// 2-2. board 순회
const mapUsingIter = new Map();
// 배열인 board를 순회하는 방법은 다양
// forEach, for of(요소), for in(인덱스)

//  ["라이캣", "라이캣", "라이캣", "빙키", "소울곰", "뮤라"];

for (const name of board) {
  // Map에 요소가 있으면 1을 추가 / 없었으면 1을 넣습니다.
  console.log(name);
  mapUsingIter.set(name, (mapUsingIter.get(name) || 0) + 1);
}
// mapUsingIter.set('라이캣', 0+1);
// mapUsingIter.set('라이캣', 1+1);
// mapUsingIter.set('라이캣', 2+1);
// mapUsingIter.set('빙키', 0+1);
console.log(mapUsingIter);
