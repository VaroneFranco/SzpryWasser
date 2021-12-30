import React from "react";
import s from "./Cards.module.css";
import Card from "../Card/Card";

export default function Cards() {
  let data = [
    { name: "Fotografía HDR", img: "", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.' },
    { name: "Tour 3D Matterport", img: "", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt." },
    { name: "Videos con drone", img: "", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.' },
    { name: "Videos a pie", img: "", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.' },
    { name: "Plano de obra", img: "", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.' },
    { name: "Montaje", img: "", description: "" },
    { name: "Renders realistas", img: "", description: "" },
    { name: "Videos animados 3D", img: "", description: "" },
    { name: "Servicio de limpieza", img: "", description: "" },
  ];

  return (
    <div className={s.wrapper3}>
      <div className={s.title}>
        <h4>Servicios</h4>
      </div>
      <div className={s.services}>
        {data.map((service) => {
          return (
            <Card
              name={service.name}
              img={service.img}
              description={service.description}
            />
          );
        })}
      </div>
    </div>
  );
}
