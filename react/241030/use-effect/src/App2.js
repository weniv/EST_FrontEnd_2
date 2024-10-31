import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const ItemList = styled.div`
    margin: 60px auto;

    ul {
      display:flow-root;
      padding: 10px;
    }

    li {
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      padding: 10px;
      box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      list-style: none;
      margin: 20px 0;
      strong{
        display:block;
        }
    }
    

    .options{
        display:flow-root;
        padding: 10px;
    }
        button{
            float:right;
            padding: 10px;
            border-radius: 5px;
            border:1px solid black;
            background-color: #fff;
        }
`;


export default function App2() {
    const [nationList, setNationList] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/nations');

    useEffect(() => {
        // fetch('http://localhost:3000/nations')
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error('다운로드에 실패했습니다!');
        //         }
        //         return response.json();
        //     })
        //     .then(json => {
        //         console.log(json);
        //         return setNationList(json);
        //     })
        //     .catch(error => console.error(error));
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('다운로드에 실패했습니다!');
                }

                const json = await response.json();
                setNationList(json);
            } catch (error) {
                console.error('다운로드에 실패했습니다: ', error);
            }
        }

        fetchData();

    }, [url]);


    return (
        <ItemList>
            <ul>
                {nationList.map((nation) => {
                    return (
                        <li key={nation.id}>
                            <strong>{nation.title}</strong>
                            <data value={nation.population}>{nation.population}</data>
                        </li>
                    );
                })}
            </ul>
            <div className='options'>
                <button onClick={() => {
                    console.log('click!');
                    setUrl('http://localhost:3000/nations?loc=europe')
                }
                }>유럽목록</button>
                <button onClick={() => setUrl('http://localhost:3000/nations')}>전체목록</button>
            </div>
        </ItemList >
    )
}
