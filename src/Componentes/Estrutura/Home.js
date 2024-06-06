//Sources node
import React from "react";
import { Link } from "react-router-dom";


//Import do css Base, botões e certos elementos
import "./Atividades/Utilitarios/CSS/Home.css"


//Inicio código
const Home = () => {
    return (
        <div className="Geral">
            <h1>Página inicial</h1>
            <h2>Atividades</h2>
            <nav>
                <ul className="Links">
                    <div className="semanas">
                        <h1>Semana 1</h1>
                        <li>
                            <Link className="Link" to={"/ATV1"}>Atividade 1</Link>
                        </li>
                        <li>
                            <Link className="Link" to={"/ATV2"}>Atividade 2</Link>
                        </li>
                    </div>
                    <div className="semanas">
                        <h1>Semana 2</h1>
                        <li>
                            <Link className="Link" to={"/ATV3"}>Atividade 3</Link>
                        </li>
                    </div>
                    <div className="semanas">
                        <h1>Semana 3</h1>
                        <li>
                            <Link className="Link" to={"/ATV4"}>Atividade 4</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}
export default Home;