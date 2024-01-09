/* extensiones */
import {Routes, Route} from 'react-router-dom';
import './App.css'

/* Componentes */
import Home from './components/Home'
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import FormAsesoria from './components/FormAsesoria';
import Informacion1 from './components/Informacion1';
import Iconos from './components/Iconos';
import Comentarios from './components/Comentarios';

function App() {


  return (
    <div className="div col-12">
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/" element={<Galeria/>}></Route>
    <Route path="/" element={<Footer/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/" element={<FormAsesoria/>}></Route>
    <Route path="/" element={<Informacion1/>}></Route>
    <Route path="/" element={<Iconos/>}></Route>
    <Route path="/" element={<Comentarios/>}></Route>
    </Routes>
    </div>
  )
}

export default App
