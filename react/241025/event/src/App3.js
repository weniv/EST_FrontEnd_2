import React from 'react';
import FormAdd from './FormAdd';
import { useState } from 'react';
import Counter from './Counter';

export default function App3() {

    const [pets, setPets] = useState([
        { name: "벨라", species: "고양이", age: "5", id: 111 },
        { name: "루시", species: "강아지", age: "3", id: 112 },
        { name: "데이지", species: "토끼", age: "2", id: 113 },
        { name: "몰리", species: "고양이", age: "1", id: 114 },
        { name: "매기", species: "강아지", age: "6", id: 115 }
    ]);

    return (
        <>
            {/* <Counter /> */}
            <FormAdd setPets={setPets} />
            <ul>
                {pets.map((pet) => {
                    return <li key={pet.id}>{pet.name}는 {pet.species}입니다. 그리고 {pet.age}살입니다.</li>
                })}
            </ul>
        </>
    )
}
