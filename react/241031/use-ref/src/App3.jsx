import React, { useState, useMemo } from 'react'

export default function App() {
    const [userInfo, setUserInfo] = useState([]);
    const [name, setName] = useState('');
    const [id, setId] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        const newInfo = [...userInfo, { name, id }];
        setUserInfo(newInfo);
        console.log('렌더링 - 3');
    }

    const handleInput1 = (event) => {
        console.log('렌더링 - 1');
        setName(event.target.value);
    }

    const handleInput2 = (event) => {
        console.log('렌더링 - 2');
        setId(event.target.value);
    }

    // 모든 렌더링에 함께 렌더링되는 이슈가 있습니다.
    function getNum(li) {
        console.log('렌더링!');
        return li.length;
    }

    const n = useMemo(() => {
        return getNum(userInfo);
    }, [userInfo]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='이름을 입력하세요'
                    onChange={handleInput1}
                    value={name}
                />
                <input
                    type='text'
                    placeholder='아이디를 입력하세요'
                    onChange={handleInput2}
                    value={id}
                />
                <button type='submit'>회원 명부 작성</button>
            </form>
            <ul>
                {
                    userInfo.map((value, index) => (
                        <li key={index}>
                            <h3>이름 : {value.name}</h3>
                            <strong>아이디 : {value.id}</strong>
                        </li>
                    ))
                }
            </ul>
            <span>현재 회원 수 : {n}</span>
        </>
    )
}