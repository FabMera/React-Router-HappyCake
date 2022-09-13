import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarCap from "./components/NavBarCap";

function App() {
  return (
    <BrowserRouter>
      <NavBarCap/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacto' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
