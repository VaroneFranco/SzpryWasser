import react from "react";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (<>
    <nav className={s.nav}>
        <img className={s.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFn3Z4PLHZoLlhOIZJAGKxWqn7u9wAIkatQ&usqp=CAU'/>
      <ul className={s.ul}>
        <span className={s.span}>Nosotros</span>
        <span className={s.span}>Contacto</span>
        <span className={s.span}>Servicios</span>
      </ul>
    </nav></>
  );
};

export default NavBar;
