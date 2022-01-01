import React from "react";
import s from "./Cards.module.css";
import Render from "../../Multimedia/Render.jpg";

export default function Cards() {
  let data = [
    {
      name: "Fotografía HDR",
      img: "https://conceptodefinicion.de/wp-content/uploads/2015/04/fotografia.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.",
    },
    {
      name: "Tour 3D Matterport",
      img: Render,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.",
    },
    {
      name: "Videos con drone",
      img: Render,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.",
    },
    {
      name: "Videos a pie",
      img: Render,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.",
    },
    {
      name: "Plano de obra",
      img: Render,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.",
    },
    {
      name: "Montaje",
      img: Render,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.",
    },
    {
      name: "Renders realistas",
      img: Render,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.",
    },
    // {
    //   name: "Videos animados 3D",
    //   img: Render,
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.",
    // },
    {
      name: "Servicio de limpieza",
      img: Render,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam recusandae consectetur fugit, obcaecati consequuntur voluptatem similique dolor incidunt sunt.",
    },
  ];

  return (
    // <div classNameName={s.wrapper3}>
    //   <div classNameName={s.title}>
    //     <h4>Servicios</h4>
    //   </div>
    //   <div classNameName={s.services}>
    //     {data.map((service) => {
    //       return (
    //         <Card
    //           name={service.name}
    //           img={service.img}
    //           description={service.description}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
    <div id='services' className={s.wrapper3}>
      <div className={s.container}>
        <div className={s.heading}>
          <h1>Servicios</h1>
        </div>
        <div className={s.row}>
          {data.map((data) => {
            return (
              <div className={s.card}>
                <div className={s.cardheader}>
                  <h1>{data.name}</h1>
                </div>
                <div className={s.cardbody}>
                  <p>{data.description}</p>
                  <a href="#" className={s.btn}>
                    Read more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className={s.card}>
            <div className={s.cardheader}>
              <h1>React</h1>
            </div>
            <div className={s.cardbody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                neque molestiae eius explicabo mollitia tempore reiciendis, vel,
                sequi.
              </p>
              <a href="#" className={s.btn}>
                Read more
              </a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardheader}>
              <h1>React</h1>
            </div>
            <div className={s.cardbody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                neque molestiae eius explicabo mollitia tempore reiciendis, vel,
                sequi.
              </p>
              <a href="#" className={s.btn}>
                Read more
              </a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardheader}>
              <h1>React</h1>
            </div>
            <div className={s.cardbody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                neque molestiae eius explicabo mollitia tempore reiciendis, vel,
                sequi.
              </p>
              <a href="#" className={s.btn}>
                Read more
              </a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardheader}>
              <h1>React</h1>
            </div>
            <div className={s.cardbody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                neque molestiae eius explicabo mollitia tempore reiciendis, vel,
                sequi.
              </p>
              <a href="#" className={s.btn}>
                Read more
              </a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardheader}>
              <h1>Vue</h1>
            </div>
            <div className={s.cardbody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                neque molestiae eius explicabo mollitia tempore reiciendis, vel,
                sequi.
              </p>
              <a href="#" className={s.btn}>
                Read more
              </a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardheader}>
              <h1>Angular</h1>
            </div>
            <div className={s.cardbody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                neque molestiae eius explicabo mollitia tempore reiciendis, vel,
                sequi.
              </p>
              <a href="#" className={s.btn}>
                Read more
              </a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardheader}>
              <h1>JQuery</h1>
            </div>
            <div className={s.cardbody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                neque molestiae eius explicabo mollitia tempore reiciendis, vel,
                sequi.
              </p>
              <a href="#" className={s.btn}>
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> */
}
