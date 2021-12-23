import react from "react";
import NavBar from "../NavBar/NavBar";
import s from "./Home.module.css";
import ny from "../../Multimedia/NY.mp4";

export default function Home() {
  return (
    <>
      <NavBar />
      <video autoPlay muted loop className={s.video}>
        <source src={ny} type="video/mp4" />
      </video>
      <div className={s.wrapper}>
        <div className={s.nosotros}>
          <span>Lorem ipsum dolor sit amet.</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus.
          </span>
        </div>
        <div className={s.nosotros2}>
          <span>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, hic!
          </span>
        </div>
        <div className={s.contact}></div>
      </div>
    </>
  );
}
