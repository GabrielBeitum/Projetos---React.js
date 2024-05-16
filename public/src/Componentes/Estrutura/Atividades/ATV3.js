import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Homem from './Utilitarios/Imagens/Homem.png';
import Mulher from './Utilitarios/Imagens/Mulher.png';
import "./Utilitarios/CSS/Contador.css";


export default function Counter() {
    //Variavéis de Exibição
    const [countTotal, setCountTotal] = useState(0);
    const [counth, setCounth] = useState(0);
    const [countm, setCountm] = useState(0);

    //Para Homem
    const handleIncrementh = () => {
        setCounth(prevCount => prevCount + 1);
    };

    const handleDecrementh = () => {
        if (counth > 0) {
            setCounth(prevCount => prevCount - 1);
        }
    };

    //Para Mulher
    const handleIncrementm = () => {
        setCountm(prevCount => prevCount + 1);
    };

    const handleDecrementm = () => {
        if (countm > 0) {
            setCountm(prevCount => prevCount - 1);
        }
    };
    //Para Total
    useEffect(() => { setCountTotal(counth + countm >= 0 ? counth + countm : 0) })


    return (
        <div className="Geral">
            <div className="Homem">
                <img src={Homem} alt="Homem" />
                <div className="ContainerButton">
                    <div className="SubButton">
                        <button className="BotaoAdd" onClick={handleIncrementh} aria-label="Increment">+</button>
                        <button className="BotaoLess" onClick={handleDecrementh} aria-label="Decrement" disabled={counth === 0}>-</button>
                    </div>
                </div>
                <span key="count" className="ResultadoUnico"> {counth}</span>
            </div>
            <div className="Resultado">
                <div className="ContainerButton">
                    <h1>Total</h1>
                    <span key="count" className="ResultadoUnico"> {countTotal}</span>
                </div>
            </div>
            <div className="Mulher">
                <img src={Mulher} alt="Mulher" />
                <div className="ContainerButton">
                    <div className="SubButton">
                        <button className="BotaoAdd" onClick={handleIncrementm} aria-label="Increment">+</button>
                        <button className="BotaoLess" onClick={handleDecrementm} aria-label="Decrement" disabled={countm === 0}>-</button>
                    </div>
                    <span key="count" className="ResultadoUnico"> {countm}</span>
                </div>
            </div>
            <Link to="/">Página Inicial</Link>            
        </div>
        


    );
}
//O código em comentário foi corrigido pelo blackbox 

// import { useState, useEffect } from "react";
// import Homem from './Imagens/Homem.png';
// import Mulher from './Imagens/Mulher.png';
// import "./CSS/Contador.css";

// export default function Counter() {
//   const [countHomem, setCountHomem] = useState(0);
//   const [countMulher, setCountMulher] = useState(0);
//   const [countTotal, setCountTotal] = useState(0);

//   const handleIncrement = (setter) => () => {
//     setter((prevCount) => prevCount + 1);
//   };

//   const handleDecrement = (setter, count) => () => {
//     if (count > 0) {
//       setter((prevCount) => prevCount - 1);
//     }
//   };

//   useEffect(() => {
//     setCountTotal(countHomem + countMulher);
//   }, [countHomem, countMulher]);

//   return (
//     <div className="Geral">
//       <div className="Homem">
//         <img src={Homem} alt="Homem" />
//         <div className="ContainerButton">
//           <div className="SubButton">
//             <button className="BotaoAdd" onClick={handleIncrement(setCountHomem)} aria-label="Increment">+</button>
//             <button className="BotaoLess" onClick={handleDecrement(setCountHomem, countHomem)} aria-label="Decrement" disabled={countHomem === 0}>-</button>
//           </div>
//         </div>
//         <span className="ResultadoUnico"> {countHomem}</span>
//       </div>
//       <div className="Resultado">
//         <div className="ContainerButton">
//           <span className="ResultadoUnico"> {countTotal}</span>
//         </div>
//       </div>
//       <div className="Mulher">
//         <img src={Mulher} alt="Mulher" />
//         <div className="ContainerButton">
//           <div className="SubButton">
//             <button className="BotaoAdd" onClick={handleIncrement(setCountMulher)} aria-label="Increment">+</button>
//             <button className="BotaoLess" onClick={handleDecrement(setCountMulher, countMulher)} aria-label="Decrement" disabled={countMulher === 0}>-</button>
//           </div>
//           <span className="ResultadoUnico"> {countMulher}</span>
//         </div>
//       </div>
//     </div>
//   );
// }