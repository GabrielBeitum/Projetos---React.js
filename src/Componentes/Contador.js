import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className="ContainerButton">
            <div className="SubButton">
                <button className="BotaoAdd" onClick={handleIncrement} aria-label="Increment">+</button>
                <button className="BotaoLess" onClick={handleDecrement} aria-label="Decrement" disabled={count === 0}>-</button>
            </div>
            <span key="count" className="ResultadoUnico"> {count}</span>
        </div>
    );
}