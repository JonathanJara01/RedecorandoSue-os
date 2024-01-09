import Comentarios from "./Comentarios";
import Footer from "./Footer"
import FormAsesoria from "./FormAsesoria";
import Galeria from "./Galeria";
import Informacion1 from "./Informacion1";
import { NavLink } from "react-router-dom";
import logoSinFondo from '../assets/logoRSsinfondo.png'


const Home = () => {
  return (
    <div>
        <div className="col-12 text-center">
          <NavLink to='/'>
            <img src={logoSinFondo} alt="fondo" />
          </NavLink>
        </div>

    {/*Comentarios*/}
        <div>
          <Informacion1/>
        </div>

    {/*Galeria*/}
        <div>
          <Galeria/>
        </div>

    {/*FormAsesoria*/}
        <div>
          <FormAsesoria/>
        </div>
   
    {/*Comentarios*/}
        <div>
          <Comentarios/>
        </div>


{/*FOOTER */}
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;