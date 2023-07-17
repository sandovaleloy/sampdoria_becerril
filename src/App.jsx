import { Route, Routes } from "react-router-dom";
import "./App.css";
import Jugadores from "./components/jugadores/Jugadores";
import Navbar from "./components/layout/Navbar";
import Partidos from "./components/partidos/Partidos";
import Main from "./components/main/Main";
import PaginaPrincipal from "./components/tabla/PaginaPrincipal";
import Footer from "./components/footer/Footer";
// import Prueba from "./components/pruebba/Prueba";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/jugadores" element={<Jugadores />} />
        <Route path="/partidos" element={<Partidos />} />
        <Route path="/tabla" element={<PaginaPrincipal />} />
      </Routes>
        {/* <Prueba/> */}
      <Footer />
    </div>
  );
}

export default App;
