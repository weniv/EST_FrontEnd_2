import styled from "styled-components";
import { QuizConfig, QuizQuestion } from "./types/quiz";
import QuizSetup from "./components/QuizSetup";
import { useState } from "react";
import QuizGame from "./components/QuizGame";

// 퀴즈의 진행 단계
enum QuizStep {
  SETUP,
  PLAYING,
  RESULT
}


function App() {

  const [step, setStep] = useState<QuizStep>(QuizStep.SETUP);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  const startQuiz = async (config: QuizConfig) => {

    try {
      const url = new URL('https://opentdb.com/api.php');
      // amount=10&category=20&difficulty=easy&type=multiple
      url.searchParams.append('amount', config.amount.toString());
      url.searchParams.append('category', config.category.toString());
      url.searchParams.append('difficulty', config.difficulty);
      url.searchParams.append('type', 'multiple');

      const response = await fetch(url);
      const data = await response.json();

      setQuestions(data.results);
      setStep(QuizStep.PLAYING);

      if (!response.ok) {
        throw new Error('퀴즈 데이터 요청에 실패했습니다!');
      }

    } catch (error: unknown) {
      console.error((error as Error).message);
    }
  }


  return (
    <AppContainer>
      <header>
        <h1>퀴즈 퀴즈 챌린지</h1>
      </header>
      <main>
        {step === QuizStep.SETUP && <QuizSetup onStart={startQuiz} />}
        {step === QuizStep.PLAYING && <QuizGame questions={questions} />}
      </main>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  header {
    margin-bottom: 2rem;
    
    h1 {
      text-align: center;
      font-size: 2.5rem;
      color: #333;
    }
  }

  main {
    background-color: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export default App
