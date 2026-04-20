import { Suspense, useState } from "react";
import "./App.css";
import Questions from "./Components/Questions/Questions";
import ResultScreen from "./Components/ResultScreen/ResultScreen";

const quizPromise = fetch("/quizes.json").then((res) => res.json());

function App() {
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  const [screen, setScreen] = useState("");

  console.log(score);

  const hanldleNext = (currentQuiz, total) => {
    setTotalQuestion(total);
    const isCorrect = selected === currentQuiz.answer;
    if (isCorrect) setScore(score + 1);
    setUserAnswer([...userAnswer, selected]);

    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected("");
    } else {
      setScreen("result");
    }
  };

  if (screen === "result") {
    return (
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <ResultScreen
          score={score}
          totalQuestion={totalQuestion}
          userAnswer={userAnswer}
          quizPromise={quizPromise}
        />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-base-300 flex items-center justify-center p-4">
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <Questions
          currentIndex={currentIndex}
          hanldleNext={hanldleNext}
          selected={selected}
          setSelected={setSelected}
          quizPromise={quizPromise}
        />
      </Suspense>
    </div>
  );
}

export default App;
