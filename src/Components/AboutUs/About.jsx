import React from "react";
import s from "./About.module.css";
import foto from "../../Multimedia/Foto1.jpeg";

export default function About() {
  return (
    <div id='about' className={s.wrapper2}>
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
        <img src='https://witei-media.s3.amazonaws.com/django-summernote/2019-08-01/a1371a0e-f88f-48c4-b49d-91e6396f5bb7.jpg' className={s.foto} />
      </div>
    </div>
  );
}
