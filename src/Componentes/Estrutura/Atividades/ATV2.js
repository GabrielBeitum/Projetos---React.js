import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function FraseFatec() {
  const [texto, setTexto] = useState('');
  const frase = "Conheça a FATEC!!";
  const intervalo = 500; 

  useEffect(() => {
    let index = 0;
    let timer = null;
    let timeout = null;

    timer = setInterval(() => {
      if (index < frase.length) {
        setTexto(texto + frase[index]);
        index++;
      } else {
        clearInterval(timer);
        timeout = setTimeout(() => {
          setTexto('');
        }, 1000);
      }
    }, intervalo);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [frase, intervalo]);

  return (
    <div>
      <h1>{texto}</h1>
      {<Link className='Link' to={"/"}>Home</Link>}
    </div>
  );
}