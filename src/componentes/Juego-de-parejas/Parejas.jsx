import { useEffect, useState } from "react";
import { cuadros } from "./datos";
import "./parejas.css";

export const Parejas = () => {
  const [aciertos, setAciertos] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const [mensaje, setMensaje] = useState();
  const [finalizado, setFinalizado] = useState(false);

  //Cuando se renderiza
  const cuadrosJuntos = [...cuadros, ...cuadros];
  const cuadrosPrevios = cuadrosJuntos.map((valor) => ({
    imagen: valor,
    estado: 0,
  }));

  const [misCuadros, setMisCuadros] = useState([]);
  const [misTiradas, setMisTiradas] = useState([]);

  useEffect(() => {
    for (let i = cuadrosPrevios.length - 1; i > 0; i--) {
      const azar = Math.floor(Math.random() * (i + 1));
      [cuadrosPrevios[i], cuadrosPrevios[azar]] = [
        cuadrosPrevios[azar],
        cuadrosPrevios[i],
      ];
    }
    setMisCuadros([...cuadrosPrevios]);
  }, []);

  const tapado = {
    backgroundImage: `url(https://www.html6.es/img/rey_.png)`,
  };

  const marcar = (e) => {
    const existe = misTiradas.find((objeto) => objeto.indice === e);
    const encontrada = misCuadros[e].estado;
    if (misTiradas.length < 2 && !existe && encontrada === 0) {
      setMisTiradas([
        ...misTiradas,
        {
          imagen: misCuadros[e].imagen,
          indice: e,
        },
      ]);
      const prevItem = [...misCuadros];
      prevItem[e].estado = 1;
      setMisCuadros(prevItem);
    }
  };

  useEffect(() => {
    if (misTiradas.length === 2) {
      setIntentos(intentos + 1);
      if (misTiradas[0].imagen === misTiradas[1].imagen) {
        setMisTiradas([]);
        setAciertos(aciertos + 1);
        if (aciertos + 1 >= cuadros.length) {
          setMensaje(
            <>
              <div className="overlay"></div>

              <div className="text">
                <div className="wrapper">
                  <div id="L" className="letter">
                    G
                  </div>
                  <div className="shadow">G</div>
                </div>
                <div className="wrapper">
                  <div id="I" className="letter">
                    A
                  </div>
                  <div className="shadow">A</div>
                </div>
                <div className="wrapper">
                  <div id="G" className="letter">
                    N
                  </div>
                  <div className="shadow">N</div>
                </div>
                <div className="wrapper">
                  <div id="H" className="letter">
                    A
                  </div>
                  <div className="shadow">A</div>
                </div>
                <div className="wrapper">
                  <div id="T" className="letter">
                    S
                  </div>
                  <div className="shadow">S</div>
                </div>
                <div className="wrapper">
                  <div id="N" className="letter">
                    T
                  </div>
                  <div className="shadow">T</div>
                </div>
                <div className="wrapper">
                  <div id="E" className="letter">
                    E
                  </div>
                  <div className="shadow">E</div>
                </div>
              
              </div>
            </>
          );
          setFinalizado(true);
        }
      } else {
        setTimeout(() => {
          misTiradas.map((objeto) => {
            const provisional = [...misCuadros];
            provisional[objeto.indice].estado = 0;
            setMisCuadros(provisional);
            setMisTiradas([]);
          });
        }, 1000);
      }
    }
  }, [misTiradas]);

  return (
    <>
      {finalizado && (
        <div className="panel">
          <div className="texto">
            <div className="mensaje">{mensaje}</div>
            <a href="/parejas">
              <div className="voltage-button mt-2 m-auto text-center">
                <button>Reiniciar</button>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 234.6 61.3"
                  preserveAspectRatio="none"
                  xmlSpace="preserve"
                >
                  <filter id="glow">
                    <feGaussianBlur
                      className="blur"
                      result="coloredBlur"
                      stdDeviation="2"
                    ></feGaussianBlur>
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.075"
                      numOctaves="0.3"
                      result="turbulence"
                    ></feTurbulence>
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="turbulence"
                      scale="30"
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="displace"
                    ></feDisplacementMap>
                    <feMerge>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="displace"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                  <path
                    className="voltage line-1"
                    d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z"
                    fill="transparent"
                    stroke="#fff"
                  ></path>
                  <path
                    className="voltage line-2"
                    d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
                    fill="transparent"
                    stroke="#fff"
                  ></path>
                </svg>
                <div className="dots">
                  <div className="dot dot-1"></div>
                  <div className="dot dot-2"></div>
                  <div className="dot dot-3"></div>
                  <div className="dot dot-4"></div>
                  <div className="dot dot-5"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
      <div className="cuadros">
        {misCuadros.map((dato, index) =>
          dato.estado === 0 ? (
            <div
              onClick={() => marcar(index)}
              key={index}
              className="cuadro"
              style={tapado}
            >
              <div className="atras">
                <img src="https://www.html6.es/img/naranja.png" />
              </div>
            </div>
          ) : (
            <div
              onClick={() => marcar(index)}
              key={index}
              className="cuadro"
              style={{ backgroundImage: `url(${misCuadros[index].imagen})` }}
            >
              <div className="atras">
                <img src="https://www.html6.es/img/naranja.png" />
              </div>
            </div>
          )
        )}
      </div>
      <div className="aciertos">
        {aciertos} aciertos de {intentos} intentos:
        {intentos > 0 && (
          <span className="intentos">
            ({Math.round((aciertos * 100) / intentos)} % de acierto)
          </span>
        )}
      </div>
    </>
  );
};
