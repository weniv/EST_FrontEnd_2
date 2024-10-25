import React, { useState } from 'react'

export default function Login({ userInfo, setLogin }) {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        if (id === '') {
            alert('아이디를 입력하지 않았습니다.')
        }
        if (pw === '') {
            alert('패스워드를 입력하지 않았습니다.')
        }

        // 사용자가 정확한 정보를 입력했을 경우
        if (id === userInfo.idUser && Number(pw) === userInfo.pwUser) {
            setLogin(true);
        }
    };

    const handleLoginInput = (e) => {
        console.log("id", e.target.value);
        setId(e.target.value)
    };

    const handlePasswordInput = (e) => {
        console.log("pw", e.target.value);
        setPw(e.target.value)
    };

    return (
        <form onSubmit={handleLoginSubmit}>
            <label>
                아이디 : <input type="text" onChange={handleLoginInput} value={id} />
            </label>
            <br />
            <label>
                비밀번호 :
                <input type="password" onChange={handlePasswordInput} value={pw} />
            </label>
            <button type="submit">로그인</button>
        </form>
    );
}
