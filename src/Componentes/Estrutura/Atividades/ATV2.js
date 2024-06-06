import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Letreiro() {
  const [text, setText] = useState('');
  const originalText = 'Conheça a Fatec';

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setText((prevText) => {
        const nextChar = originalText[index];
        index++;
        if (index >= originalText.length) {
          index = 0;
          return '';
        }
        return prevText + nextChar;
      });
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <h1>Meu Letreiro</h1>
      <p>{text}</p>
      <div>
        {<Link className="Link" to={"/"}>Home</Link>}
      </div>
    </>

  );
}

export default Letreiro;
