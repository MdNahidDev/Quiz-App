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

  const totalQuestion = quizData.length;
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <span>
            Question {currentIndex + 1} of {totalQuestion}
          </span>
          <span className="badge badge-outline">
            {((currentIndex + 1) / totalQuestion) * 100}%
          </span>
        </div>

        <progress
          className="progress progress-primary w-full"
          value={currentIndex + 1}
          max={totalQuestion}
        ></progress>
      </div>

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
        {currentIndex === totalQuestion - 1 ? "Finish Quiz" : "Next Quiz"}
      </button>
    </div>
  );
};

export default Questions;
