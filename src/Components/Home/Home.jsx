import react from "react";
import NavBar from "../NavBar/NavBar";
import About from "../AboutUs/About";
import Cards from "../Cards/Cards";
import Contact from "../Contact/Contact";
import s from "./Home.module.css";
import pm from "../../Multimedia/DronePtoMadero.mp4";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
      <div className={s.wrapper1}>
        <NavBar />
        <video autoPlay muted loop className={s.video}>
          <source src={pm} type="video/mp4" />
        </video>
        <div className={s.landing}>
          <h4>La mejor fotografía inmobiliaria del mercado</h4>
        </div>
        <button className={s.boton}><Link to='about' spy={true} smooth={true}>Conocenos</Link></button>
      </div>
      <About/>
      <Cards/>
      <Contact/>

    </>
  );
}
