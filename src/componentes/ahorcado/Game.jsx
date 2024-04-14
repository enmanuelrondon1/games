import { useContext, useEffect, useState } from "react";
import { PALABROS } from "./questions/palabros";
import { useNavigate } from "react-router-dom";

import "./ahorcado.css";
import { Contexto } from "../contexto/Contexto";

export const Game = () => {

const {escribirCorrecto} = useContext(Contexto)
  const navegacion = useNavigate();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const myColors = [
    { backgroundColor: "black" },
    { backgroundColor: "green", color: "white" },
    { backgroundColor: "red", color: "white" },
  ];
  const letters_array = letters.split("");
  const [random, setRandom] = useState(0);
  const [word, setWord] = useState([]);
  const [myLetter, setMyLetter] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [incorrect, setIncorrect] = useState([]);
  const [imagen, setImagen] = useState(0);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * PALABROS.length));
  }, []);

  useEffect(() => {
    setWord(PALABROS[random].palabro.split(""));
    escribirCorrecto(PALABROS[random].palabro)
  }, [random]);


  const pulsado = (e) => {
    const letra = e.target.innerHTML;
    setMyLetter([...myLetter, letra]);
    if (word.indexOf(letra) >= 0) {
      setCorrect([...correct, letra]);
    } else {
      setIncorrect([...incorrect, letra]);

      setImagen(imagen + 1);

      if (imagen > 4) {
        navegacion("/lost");
      }
    }
  };

  useEffect(() => {
    let notFound = 0;
    word.map((p) => {
      if (myLetter.find((e) => e === p) === undefined) {
        notFound++;
      }
    });
    if (notFound === 0 && correct.length > 0) {
      navegacion("/won");
    }
  }, [correct]);

  return (
    <>
      <div className="pregunta">
        Adivinala palabra: <br />
        {PALABROS[random].pregunta}
      </div>
      <div className="palabra ">
        {word.map((letter, i) =>
          myLetter.indexOf(letter) === -1 ? (
            <div key={i} className="palo "></div>
          ) : (
            <div key={i} className="palo">
              {letter}
            </div>
          )
        )}
      </div>
      <div className="botones">
        {letters_array.map((letter) =>
          correct.find((e) => e === letter) ? (
            <button style={myColors[1]} key={letter} >
              {letter}
            </button>
          ) : incorrect.find((e) => e === letter) ? (
            <button key={letter} style={myColors[2]}>
              {letter}
            </button>
          ) : (
            <button key={letter} style={myColors[0]} onClick={pulsado}>
              {letter}
            </button>
          )
        )}
      </div>
      <div className="imagen">
        <img src={PALABROS[imagen].image} alt="" />
      </div>
    </>
  );
};
