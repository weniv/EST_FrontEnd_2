
// 퀴즈 설정과 관련된 인터페이스
export interface QuizConfig {
    amount: number;
    category: number;
    difficulty: 'easy' | 'medium' | 'hard';
}

// 받아오는 퀴즈 데이터 형식을 정의하는 인터페이스
export interface QuizQuestion {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

// 퀴즈의 결과 정보를 정의하는 인터페이스
export interface QuizSummary {
    score: number;
    correctAnswers: number;
    totalQuestions: number;
}