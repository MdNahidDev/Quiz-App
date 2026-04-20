import { use, Suspense } from "react";

const ResultScreen = ({ score, totalQuestion, userAnswer, quizPromise }) => {
  const quizData = use(quizPromise);

  return (
    <div className="min-h-screen bg-base-300 p-4">
      <h2 className="text-2xl font-semibold mb-2">Quiz Complete</h2>

      <div className="stats shadow w-full my-8">
        <div className="stat">
          <div className="stat-title">Total Corrects</div>
          <div className="stat-value text-primary">{score}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Percentage</div>
          <div className="stat-value text-primary">
            {Math.round((score / totalQuestion) * 100)}%
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Your Answers</h2>
      {userAnswer.map((answer, index) => {
        const quiz = quizData[index];
        const isCorrect = answer === quiz.answer;
        return (
          <div
            key={index}
            className="mb-6 border border-base-200 rounded-2xl p-5"
          >
            <p className="font-medium mb-2">
              {index + 1}. {quiz.question}
            </p>
            <p>
              Your answer:{" "}
              <span className={isCorrect ? "text-success" : "text-error"}>
                {answer}
              </span>
            </p>
            {!isCorrect && (
              <p>
                Correct answer:{" "}
                <span className="text-success">{quiz.answer}</span>
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ResultScreen;
