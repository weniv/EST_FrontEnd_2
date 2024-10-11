// 회원가입
fetch("https://eduapi.weniv.co.kr/13/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username: "test123",
        password: "test1234",
    }),
})
.then((response) => response.json())
.then((json) => console.log(json))
.catch((error) => console.error(error));


// 로그인
fetch("https://eduapi.weniv.co.kr/13/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username: "test123",
        password: "test1234",
    }),
})
.then((response) => response.json())
.then((json) => console.log(json))
.catch((error) => console.error(error));


"eyJhbGciOi.weniv.h8t7NJKEiWCh7G3"

// 로그인 확인
// header에 안배운 Authorization가 나왔습니다!
// 'Bearer '뒤에 로그인할 때 받은 토큰을 넣어주면 로그인 인증을 해주는 header입니다.
// 띄어쓰기 한 칸 있는 것 주의해주세요!
fetch('https://eduapi.weniv.co.kr/login_confirm', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer eyJhbGciOi.weniv.h8t7NJKEiWCh7G3',
    },
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));


// 토큰을 로컬 스토리지에 저장하는 방법
localStorage.setItem('token', 'eyJhbGciOi.weniv.h8t7NJKEiWCh7G3');
localStorage.getItem('token');


// 나중에는 이렇게 사용하셔야 합니다.
const token = localStorage.getItem('token');
fetch('https://eduapi.weniv.co.kr/login_confirm', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
    },
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));


// 블로그 글 가져오기 - GET
fetch('https://eduapi.weniv.co.kr/13/blog')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));


// 글 상세 목록 - GET
fetch('https://eduapi.weniv.co.kr/13/blog/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));


// 블로그 생성 fetch를 이용한 POST 요청
fetch('https://eduapi.weniv.co.kr/13/blog', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'hojun123',
        content: 'javascript 너무 재미있어요! 프로그래밍은 어렵지만 재미있어요!',
    }),
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));


// 블로그 수정 fetch를 이용한 PUT 요청
fetch('https://eduapi.weniv.co.kr/13/blog/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'test put',
        content: 'test put',
    }),
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));


// 블로그 삭제 fetch를 이용한 DELETE 요청
fetch('https://eduapi.weniv.co.kr/13/blog/1', {
    method: 'DELETE',
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));
