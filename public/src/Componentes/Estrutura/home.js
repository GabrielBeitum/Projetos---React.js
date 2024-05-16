import React from "react";
import { Link } from "react-router-dom";

const Home= () =>{
    return(
        <div>
            <h1>Página inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link>Atividade 1</Link>
                    </li>
                    <li>
                        <Link>Atividade 2</Link>
                    </li>
                    <li>
                        <Link to={"ATV3"}>Atividade 3</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );     
    
}
export default Home;