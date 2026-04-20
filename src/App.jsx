import { Suspense, useState } from "react";
import "./App.css";
import Questions from "./Components/Questions/Questions";

const quizPromise = fetch("/quizes.json").then((res) => res.json());

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  console.log(score);
  const hanldleNext = (currentQuiz) => {
    const isCorrect = selected === currentQuiz.answer;
    if (isCorrect) setScore(score + 1);
    setUserAnswer([...userAnswer, selected]);
    setCurrentIndex(currentIndex + 1);
    setSelected("");
  };

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
