import React from 'react'
import {NavLink} from 'react-router-dom'
import Inst from '../assets/instagram.png'
import Wpp from '../assets/whatsapp.png'
import style from '../components/style/footer.module.css'

const Footer = () => {
  return (
    <div>
    <div className="row">
            <footer className="py-3 my-4">
                  <h1 className={`text-center ${style.textBody}`}>¡Siguenos En Nuestras Redes Sociales!</h1>
                <ul className="nav justify-content-center">
                    <NavLink to='https://wa.link/xolske' className="nav-link">
                      <img src={Wpp} alt="whatsapp" width='40px' />
                    </NavLink>
                    <NavLink to='https://www.instagram.com/ro.ny5313/' className="nav-link">
                      <img src={Inst} alt="instagram" width='40px' />
                    </NavLink>
                </ul>
                <br />
                <section>
                <p className="text-center text-muted">© 2024 Jonathan Jaramillo Zapata
                <NavLink to='https://www.linkedin.com/in/jonathan-jaramillo-671434265/' className="nav-link text-center text-muted">Conoce Mas Sobre Mi</NavLink>
                </p>
                </section>
            </footer>
        </div>
    </div>
  )
}

export default Footer