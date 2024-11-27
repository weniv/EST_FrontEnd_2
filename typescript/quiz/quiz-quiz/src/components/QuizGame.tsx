import React, { useState, useEffect } from 'react';
import { QuizQuestion, QuizSummary } from '../types/quiz';
import he from 'he';
import styled from 'styled-components';


interface QuizGameProps {
    questions: QuizQuestion[];
    onComplete: (result: QuizSummary) => void;
}


export default function QuizGame({ questions, onComplete }: QuizGameProps) {

    // 문제 순서 인덱스
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shuffledAnswers, setShuffledAnswers] = useState<string[][]>([]);
    console.log(shuffledAnswers);
    // 사용자의 답변을 저장합니다.
    const [answers, setAnswers] = useState<string[]>([]);

    useEffect(() => {
        const shuffled = questions.map((question) => {
            return [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
        }
        );
        setShuffledAnswers(shuffled);
    }, []);

    // 사용자 선택 정답을 저장하는 함수
    const handleAnswerSelect = (answer: string) => {
        const myAnswers = [...answers];
        myAnswers[currentIndex] = answer;
        setAnswers(myAnswers);
    }


    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('submit');
        // 누산기를 통해 정답의 개수를 파악합니다.
        const correctAnswers = questions.reduce((count, question, index) => {
            return count + (question.correct_answer === answers[index] ? 1 : 0)
        }, 0);

        onComplete({
            score: (correctAnswers / questions.length) * 100,
            correctAnswers,
            totalQuestions: questions.length
        });
    }

    if (shuffledAnswers.length === 0) {
        return <div>Loading...</div>
    }

    const currentQuestion = questions[currentIndex];

    return (
        <section>
            <QuizProgress>
                문제 {currentIndex + 1} / {questions.length}
            </QuizProgress>

            <QuizContent>

                <QuestionText>
                    {he.decode(currentQuestion.question)}
                </QuestionText>
                <AnswerList>
                    <form onSubmit={handleSubmit}>
                        {shuffledAnswers[currentIndex].map((answer, index) =>
                            <AnswerItem key={answer}>
                                <input id={`answer-${index}`} type="radio" name='answer' value={answer} onChange={() => handleAnswerSelect(answer)} />
                                <label htmlFor={`answer-${index}`}>{he.decode(answer)}</label>
                            </AnswerItem>
                        )}
                        <NavigationButtons>
                            <NavButton onClick={handlePrev} disabled={currentIndex === 0}>이전</NavButton>

                            {currentIndex === questions.length - 1 ? <SubmitButton type='submit'>제출하기</SubmitButton> : <NavButton onClick={handleNext} disabled={!answers[currentIndex]} >이후</NavButton>}
                        </NavigationButtons>
                    </form>
                </AnswerList>
            </QuizContent>


        </section>

    )
}



const QuizProgress = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
`;

const QuizContent = styled.div`
  margin-bottom: 2rem;
`;

const QuestionText = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  color: #333;
`;

const AnswerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AnswerItem = styled.div`
  input[type="radio"] {
    display: none;
  }

  label {
    display: block;
    padding: 1rem;
    background-color: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #e9ecef;
    }
  }

  input[type="radio"]:checked + label {
    background-color: #4CAF50;
    color: white;
    border-color: #4CAF50;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #5a6268;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled(NavButton)`
  background-color: #28a745;

  &:hover:not(:disabled) {
    background-color: #218838;
  }
`;
