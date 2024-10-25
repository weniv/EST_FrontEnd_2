import React from 'react'
import { useState } from 'react'

export default function FormAdd({ setPets }) {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, species, age);

        // 함수형 업데이트를 사용해야 하는 경우 : 새롭게 업데이트 되는 값이 기존값을 기반으로 했을 경우
        setPets((prev) => {
            return [...prev, { name, species, age, id: Date.now() }];
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>새로운 애완동물을 추가해보세요!</legend>
                <input type="text" placeholder='이름' onChange={(event) => setName(event.target.value)} value={name} />
                <input type="text" placeholder='종' onChange={(event) => setSpecies(event.target.value)} value={species} />
                <input type="text" placeholder='나이' onChange={(event) => setAge(event.target.value)} value={age} />
                <button type='submit'>추가하기</button>
            </fieldset>
        </form>
    )
}
