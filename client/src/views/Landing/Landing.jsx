import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import bola from './logo-pokemon.png';
const Landing = () => {
    return (
        <div className={style.landing}>
            <div className={style.overlay}>
            <h1 className={style.titulo}>BIENVENIDO</h1>
            <img src={bola} alt="logo" className={style.bola}/>
            <h3 className={style.subt}>Pokemon API</h3>
                <Link to="/home">Ingresar</Link>
            </div>
        </div>
    );
};

export default Landing;
