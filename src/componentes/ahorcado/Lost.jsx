import { useContext } from "react";
import { Contexto } from "../contexto/Contexto";
import "./lost.css";
import { useNavigate } from "react-router-dom";

export const Lost = () => {
  const navegacion = useNavigate();
  const { laCorrecta } = useContext(Contexto);
  return (
    <>
      <div className="card m-auto mt-4">
        <p className="heading">
          La palabra correcta era:
          <br />
          <span className="respuesta">{laCorrecta}</span>
        </p>

        <p>Uiverse</p>
      </div>
      <div className="colores mt-5">
        <a href="#">
          <video
            className="rounded-t-l m-auto "
            src="https://firebasestorage.googleapis.com/v0/b/unomia-stolonifera.appspot.com/o/Navegacion%2Farchivos-varios%2FUntitled%20%E2%80%91%20Made%20with%20FlexClip(3).mp4?alt=media&token=29f03207-24bf-472d-8c4c-13aa7aa8a324"
            autoPlay
            loop
            alt=""
            width=""
            muted
          />
        </a>
        <button
          className="btn m-auto"
          type="button"
          onClick={() => navegacion("/game")}
        >
          <strong>Volver a jugar</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </div>
    </>
  );
};
