import react from "react";
import NavBar from "../NavBar/NavBar";
import About from "../AboutUs/About";
import Cards from "../Cards/Cards"
import s from "./Home.module.css";
import pm from "../../Multimedia/DronePtoMadero.mp4";

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
        <button className={s.boton}>Conocenos</button>
      </div>
      <About/>
      <Cards/>
    </>
  );
}
