import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Parejas } from "./componentes/Juego-de-parejas/Parejas";
import { Nabvar } from "./Navbar";
import { Error404 } from "./componentes/Error404";
import { Vieja } from "./componentes/la-vieja/Vieja";
import { Home } from "./componentes/Home/Home";
import { Game } from "./componentes/ahorcado/Game";
import { Won } from "./componentes/ahorcado/Won";
import { Lost } from "./componentes/ahorcado/Lost";
import { Provider } from "./componentes/contexto/Provider";
import { HomePage, CategoryPage } from "./componentes/quiz-app";
import { Extra } from "./componentes/Home/Extra";

function App() {
  return (
    <Provider>
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parejas" element={<Parejas />} />
        <Route path="/game" element={<Game />} />
        <Route path="/won" element={<Won />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="/vieja" element={<Vieja />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="category/:category" element={<CategoryPage />} />
        <Route path="/extra" element={<Extra />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Provider>
  );
}

export default App;
