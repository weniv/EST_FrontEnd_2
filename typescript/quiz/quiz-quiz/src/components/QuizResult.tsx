import React from 'react'
import { QuizSummary } from '../types/quiz';
import styled from 'styled-components';


interface QuizResultProps {
    result: QuizSummary;
    onRestart: () => void;
}

export default function QuizResult({ result, onRestart }: QuizResultProps) {
    const getScoreMessage = () => {
        if (result.score >= 90) return "대단해요! 완벽에 가까워요! 🎉";
        if (result.score >= 70) return "정말 잘하셨어요! 👏";
        if (result.score >= 50) return "좋은 성적이에요! 💪";
        return "힘 내세요! 💪";
    }


    return (
        <section>
            <ResultContainer>
                <ResultHeader>
                    <h2>퀴즈 결과</h2>
                    <ScoreBadge>
                        {result.score.toFixed(1)} 점
                    </ScoreBadge>
                </ResultHeader>
                <ResultDetails>
                    <ResultMessage>
                        {getScoreMessage()}
                    </ResultMessage>
                    <StatsList>
                        <StatItem>
                            <span>전체 문제</span>
                            <strong>
                                {result.totalQuestions} 문제
                            </strong>
                        </StatItem>

                        <StatItem>
                            <span>맞은 문제</span>
                            <strong>
                                {result.correctAnswers} 문제
                            </strong>
                        </StatItem>

                        <StatItem>
                            <span>틀린 문제</span>
                            <strong>
                                {result.totalQuestions - result.correctAnswers} 문제
                            </strong>
                        </StatItem>
                    </StatsList>
                </ResultDetails>

                <RestartButton onClick={onRestart}>다시 도전하기</RestartButton>

            </ResultContainer>
        </section>
    )
}


const ResultContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ResultHeader = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }
`;

const ScoreBadge = styled.div`
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 50px;
  margin: 1rem 0;
`;

const ResultDetails = styled.div`
  margin: 2rem 0;
`;

const ResultMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const StatsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: #666;
    font-size: 0.9rem;
  }

  strong {
    font-size: 1.5rem;
    color: #333;
  }
`;

const RestartButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }
`;
