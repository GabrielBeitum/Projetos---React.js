import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Valores = () => {
    const [value, setValue] = useState(0);
    const [text, setText] = useState('');
    const [charCount, setCharCount] = useState({
        length: 0,
        alphabets: 0,
        numbers: 0,
        symbols: 0,
        spaces: 0
    });

    const handleMathOperation = (operation) => {
        let newValue;
        switch (operation) {
            case '+':
                newValue = value + 1;
                break;
            case '-':
                newValue = value - 1;
                break;
            case '*':
                newValue = value * 2;
                break;
            case '/':
                newValue = value / 2;
                break;
            case 'x²':
                newValue = value ** 2;
                break;
            case 'x³':
                newValue = value ** 3;
                break;
            case '0':
                newValue = 0;
                break;
            default:
                newValue = value;
        }
        setValue(newValue);
    };

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        setCharCount({
            length: newText.length,
            alphabets: (newText.match(/[a-zA-Z]/g) || []).length,
            numbers: (newText.match(/[0-9]/g) || []).length,
            symbols: (newText.match(/[^a-zA-Z0-9\s]/g) || []).length,
            spaces: (newText.match(/\s/g) || []).length
        });
    };

    return (
        <div className="Valores">
            <h1>Dinâmica - REGEX</h1>
            <h2>Operadores Matemáticos</h2>
            <div className="value">Value: {value}</div>
            <div className="buttons">
                {['+', '-', '*', '/', 'x²', 'x³', '0'].map(op => (
                    <button key={op} onClick={() => handleMathOperation(op)}>{op}</button>
                ))}
            </div>
            <h2>Contador de Caracteres</h2>
            <input
                type="text"
                placeholder="Digite algo..."
                value={text}
                onChange={handleTextChange}
            />
            <div className="ContadorCaracteres">
                <p>Text Length: {charCount.length}</p>
                <p>Alphabets: {charCount.alphabets}</p>
                <p>Numbers: {charCount.numbers}</p>
                <p>Symbols: {charCount.symbols}</p>
                <p>Spaces: {charCount.spaces}</p>
            </div>
            <div>
                {<Link className="Link" to={"/"}>Home</Link>}
            </div>
        </div>
    );
};

export default Valores;
