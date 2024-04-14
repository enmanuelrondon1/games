import { useNavigate } from "react-router-dom";
// import { imgs } from "./data";
import React, { useEffect, useState } from "react";
import { Results } from "./Results";

export const Question = ({
  filteredQuestion,
  setIndexQuestion,
  indexQuestion,
  questionFiltered,
  setActiveCategory,
}) => {
  const navegation = useNavigate();
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [answersRandom, setAnwersRandom] = useState([]);
  const [activeResults, setActiveResults] = useState(false);

  useEffect(() => {
    const answer = [
      ...filteredQuestion.incorrect_answers,
      filteredQuestion.correct_answer,
    ];
    setAnwersRandom(answer.sort(() => Math.random() - 0.5));
  }, [filteredQuestion]);

  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setSelectAnswerIndex(null);
    setAnswered(false);
    if (questionFiltered.length - 1 === indexQuestion) {
      navegation("/homepage");
    }
  };

  const checkAnswer = (answerText, index) => {
    if (answerText === filteredQuestion.correct_answer) {
      setScore(score + 1);
    }
    setSelectAnswerIndex(index);
    setAnswered(true);
  };
  const onReset = () => {
    setScore(0);
    setActiveCategory(false);
    setIndexQuestion(0);
  };

  return (
    <>
      {activeResults ?
 (
  <Results
    questionFiltered={questionFiltered}
    score={score}
    onReset={onReset}
  />)
      :
      
      
      (
        <div className="flex flex-col justify-between shadow-sm shadow-slate-300 w-[600px] h-[600px] p-10 rounded-lg ">
          <div className="flex justify-between">
            <span className="text-xl font-bold">
              {indexQuestion + 1} / {questionFiltered.length}
            </span>
            <div>
              <span className="span font semibold">Dificultad:</span>
              <span className=" font-bold">{filteredQuestion.difficulty}</span>
            </div>
          </div>

          <button
            onClick={onReset}
            className=" border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900"
          >
            Reiniciar
          </button>

          <div>
            <h1 className="font-bold">{filteredQuestion.question}</h1>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {answersRandom.map((answer, index) => (
              <button
                key={index}
                className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105
                ${
                  selectAnswerIndex !== null && index === selectAnswerIndex
                    ? answer === filteredQuestion.correct_answer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : ""
                }`}
                onClick={() => checkAnswer(answer, index)}
                disabled={answered && selectAnswerIndex !== index}
              >
                <p className="font-medium text-center text-sm">{answer}</p>
              </button>
            ))}
          </div>

          {indexQuestion + 1 === questionFiltered.length ? (
            <button
              onClick={() => {
                setAnswered(false);
                setActiveResults(true);
              }}
              className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
            >
              Finalizar
            </button>
          ) : (
            <button
              onClick={onNextQuestion}
              className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
            >
              siguiente pregunta
            </button>
          )}
        </div>
      ) 
      }
    </>
  );
};
