import React, { useState } from "react";
import s from "./Contact.module.css";
// import nodemailer from 'nodemailer'

// const mailer = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: "SzpryngierWasserman@gmail.com",
//       pass: "fotoinmobiliaria", // Luego ubicar en el .env !!!!
//     },
//   });

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={s.wrapper4}>
      <div className={s.title}>
        <h1>Contacto</h1>
      </div>
      <form className={s.form} onSubmit={e => onSubmit(e)}>
        <input
          className={s.input}
          placeholder="Nombre"
          name="name"
          value={data.name}
          onChange={(e) => onChange(e)}
        />
        <input
          className={s.input}
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={(e) => onChange(e)}
        />
        <input
          className={s.input}
          placeholder="11 2345 6789"
          value={data.number}
          name="number"
          onChange={(e) => onChange(e)}
        />
        <button type="sumbit">Enviar</button>
      </form>
    </div>
  );
}
