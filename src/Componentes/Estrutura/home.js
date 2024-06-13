import React from "react";
import { Link } from "react-router-dom";

const Home= () =>{
    return(
        <div>
            <h1>Página inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"ATV1"}>Atividade 1</Link>
                    </li>
                    <li>
                        <Link to={"ATV2"}>Atividade 2</Link>
                    </li>
                    <li>
                        <Link to={"ATV3"}>Atividade 3</Link>
                    </li>
        <li>
                        <Link to={"ATV4"}>Atividade 3</Link>
                    </li>
        <li>
                        <Link to={"ATV5"}>Atividade 3</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );     
    
}
export default Home;
