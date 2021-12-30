import React from "react";
import s from './Card.module.css'

export default function Card({name, img, description}){
    return(
        <div className={s.card}>
            {name}
        </div>
    )
}