import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Encabezado from './componentes/Encabezado';
import NavBar from './componentes/NavBar';
import Guajolotas from './componentes/Guajolotas';
import Bebidas from './componentes/Bebidas';
import Tamales from './componentes/Tamales';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Encabezado/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Guajolotas />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/tamales" element={<Tamales />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
