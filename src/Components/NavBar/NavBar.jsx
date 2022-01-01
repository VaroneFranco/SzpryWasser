import react from "react";
import s from "./NavBar.module.css";
import hamburguesa from "../../Multimedia/hamburger.png";
import logo from "../../Multimedia/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <nav className={s.nav}>
        <h2 className={s.logo} src={logo} > SW</h2>
        {/* <img className={s.burger} src={hamburguesa} /> */}
        <div className={s.menu}>
          <span> <Link to='about' spy={true} smooth={true}>¿Quiénes somos?</Link></span>
          <span><Link to='services' spy={true} smooth={true}>Servicios</Link></span>
          <span>Contacto</span>
          <span>Galería</span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
