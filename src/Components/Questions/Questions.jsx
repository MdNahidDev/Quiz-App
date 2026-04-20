import React, { use } from "react";

const Questions = ({
  quizPromise,
  selected,
  setSelected,
  hanldleNext,
  currentIndex,
}) => {
  const quizData = use(quizPromise);
  const currentQuiz = quizData[currentIndex];
  return (
    <div>
      <h2 className="text-2xl font-semibold my-8 leading-tight">
        {currentQuiz.question}
      </h2>
      <div className="grid gap-4">
        {currentQuiz.options.map((option) => (
          <button
            key={option}
            className={`btn justify-start text-left text-[15px] h-auto py-4 px-6 ${selected === option ? "btn-primary" : "btn-outline"}`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="btn btn-primary btn-block text-base h-auto py-4 px-6 mt-8"
        onClick={() => hanldleNext(currentQuiz)}
        disabled={!selected}
      >
        Finish Quiz
      </button>
    </div>
  );
};

export default Questions;
