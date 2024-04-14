import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image, questions } from "./data";
import { Question } from "./Question";
import { imgs } from "./data";
import { imagenes } from "../../assets/imagenes";

const shufleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
};

export const CategoryPage = () => {
  const { category } = useParams();
  console.log(category);
  const [imagen] = imgs.filter((img) => img === imgs[Math.floor(Math.random() * imgs.length)].categorias );

  // imgs[Math.floor(Math.random() * imgs.length)];

  // Mostrar preguntas

  const [questionFiltered, setQuestionFiltered] = useState(
    questions.filter((question) => question.category === category)
  );
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeCategory, setActiveCategory] = useState(false);

  useEffect(() => {
    const newQuestions = shufleArray(questionFiltered);
    setQuestionFiltered(newQuestions);
  }, []);

  return (
    <>
      <div
        className="conatiner flex flex-col items-center justify-center gap-10"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        {activeCategory ? (
          <Question
            filteredQuestion={questionFiltered[indexQuestion]}
            setIndexQuestion={setIndexQuestion}
            indexQuestion={indexQuestion}
            questionFiltered={questionFiltered}
            setActiveCategory={setActiveCategory}
          />
        ) : (
          <>
            <div className="flex flex-col gap-5">
              <h1 className=" respuesta text-3xl text-teal-900 text-center font-bold">
                {category}
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <img src={imagen} />
            </div>

            <button
              onClick={() => setActiveCategory(true)}
              className="text-white bg-gray-800 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow -500 hover:text-gray-900"
            >
              Iniciar Quiz
            </button>
          </>
        )}
      </div>
    </>
  );
};
