import React, { useState } from 'react';
import { QuizConfig } from '../types/quiz';
import styled from 'styled-components';


interface QuizSetupProps {
    onStart: (config: QuizConfig) => void;
}

export default function QuizSetup({ onStart }: QuizSetupProps) {

    const [amount, setAmount] = useState(3);
    const [category, setCategory] = useState(9);
    const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onStart({ amount, category, difficulty });
    }

    return (
        <section>
            <SetupForm onSubmit={handleSubmit}>
                <fieldset>
                    <legend>퀴즈 설정</legend>

                    <FormGroup>
                        <label htmlFor="amount">문제 수: {amount}개</label>
                        <input type="range" id='amount' min="3" max="10" value={amount} onChange={(event) => setAmount(Number(event.target.value))} />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="category">카테고리</label>
                        <select id="category" value={category} onChange={(event) => setCategory(Number(event.target.value))}>
                            <option value="9">일반 상식</option>
                            <option value="21">스포츠</option>
                            <option value="23">역사</option>
                            <option value="24">정치</option>
                            <option value="25">예술</option>
                        </select>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="difficulty">난이도</label>
                        <select id="difficulty" value={difficulty} onChange={(event) => setDifficulty(event.target.value as 'easy' | 'medium' | 'hard')}>
                            <option value="easy">쉬움</option>
                            <option value="medium">보통</option>
                            <option value="hard">어려움</option>
                        </select>
                    </FormGroup>

                    <StartButton type='submit'>퀴즈 시작하기</StartButton>
                </fieldset>
            </SetupForm>
        </section >
    )
}


// 스타일 컴포넌트 정의
const SetupForm = styled.form`
 fieldset {
   border: none;
   padding: 0;
 }
 legend {
   font-size: 1.5rem;
   font-weight: bold;
   margin-bottom: 1.5rem;
   text-align: center;
 }
`;

const FormGroup = styled.div`
 margin-bottom: 1.5rem;
 
 label {
   display: block;
   margin-bottom: 0.5rem;
   font-weight: 500;
 }
 
 select, input {
   width: 100%;
   border: 1px solid #ddd;
   border-radius: 4px;
   font-size: 1rem;
 }
 
 select {
   padding: 0.5rem;
 }
 
 input[type="range"] {
   margin-top: 0.5rem;
 }
`;

const StartButton = styled.button`
 width: 100%;
 padding: 1rem;
 background-color: #4CAF50;  // 초록색 배경
 color: white;
 border: none;
 border-radius: 4px;
 font-size: 1.1rem;
 cursor: pointer;
 transition: background-color 0.2s;
 
 &:hover {
   background-color: #45a049;  // 호버 시 더 어두운 초록색
 }
`;
