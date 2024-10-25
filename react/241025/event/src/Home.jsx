import React from 'react'

export default function Home({ setLogin }) {
    return (
        <>
            <h1>홈 화면입니다!</h1>
            <button onClick={() => setLogin(false)}>로그아웃</button>
        </>
    )
}
