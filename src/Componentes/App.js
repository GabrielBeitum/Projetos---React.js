import React, { useState, useCallback } from 'react';
import Count from './Contador';
import homemUrl from './Imagens/Homem.png';
import mulherUrl from './Imagens/Mulher.png';
import './CSS/App.css';

function SubContainer({ title, imageUrl, onCountUpdate }) {
  return (
    <div className='SubContainer'>
      <img src={imageUrl} className='imagem' alt={title} />
      <h1>{title}</h1>
      <Count onCountUpdate={onCountUpdate} />
    </div>
  );
}

function App() {
  const [totalCount, setTotalCount] = useState(0);

  const handleCountUpdate = useCallback((newCount) => {
    setTotalCount((prevCount) => prevCount + newCount);
  }, []);

  return (
    <div className="App">
      <div className='Container'>
        <SubContainer title="Homem" imageUrl={homemUrl} onCountUpdate={handleCountUpdate} />
        <div className='SubContainer'>
          <h1>Total</h1>
          <span className='ResultadoTotal'>{totalCount}</span>
        </div>
        <SubContainer title="Mulher" imageUrl={mulherUrl} onCountUpdate={handleCountUpdate} />
      </div>
    </div>
  );
}

export default App;