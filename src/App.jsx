import { Route, Routes } from "react-router-dom";
import "./App.css";
import Jugadores from "./components/Jugadores";
import Navbar from "./components/Navbar";
import Partidos from "./components/Partidos";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/jugadores" element={<Jugadores />} />
        <Route path="/partidos" element={<Partidos />} />
      </Routes>
      
    </div>
  );
}

export default App;
