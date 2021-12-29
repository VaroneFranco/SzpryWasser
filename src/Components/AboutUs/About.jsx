import React from "react";
import s from "./About.module.css";
import foto from "../../Multimedia/Foto1.jpeg";

export default function About() {
  return (
    <div className={s.wrapper2}>
      <div className={s.title}>
        <h4>Nosotros</h4>
      </div>
      <div className={s.about}>
        <p>
          Somos una empresa de produccion de contenidos audiovisuales enfocados
          en el sector inmobiliario. Nuestro objetivo es brindarles a nuestros
          clientes herramientas para poder comercializar sus inmuebles,
          mostrando contenido audiovisual de calidad, trabajando siempre con el
          mayor de los profesionalismos y responsabilidad
        </p>
        <img src={foto} className={s.foto} />
      </div>
    </div>
  );
}
