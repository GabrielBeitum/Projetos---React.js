import React, { useState, useEffect } from 'react';

function Cronometro() {
    const [segundo, setSegundo] = useState(0);
    const [minuto, setMinuto] = useState(0);
    const [hora, setHora] = useState(0);
    const [data, setData] = useState(new Date());
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setSegundo(segundo + 1);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [segundo]);
  
    useEffect(() => {
      if (segundo === 60) {
        setMinuto(minuto + 1);
        setSegundo(0);
      }
    }, [segundo, minuto]);
  
    useEffect(() => {
      if (minuto === 60) {
        setHora(hora + 1);
        setMinuto(0);
      }
    }, [minuto, hora]);
  
    useEffect(() => {
      if (hora === 24) {
        setHora(0);
      }
    }, [hora]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setData(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    function formatarNumero(numero) {
      return numero < 10 ? "0" + numero : numero;
    }
  
    return (
      <div>
        <h1>
          {formatarNumero(hora)}:{formatarNumero(minuto)}:{formatarNumero(segundo)}
        </h1>
      </div>
    );
  }
  

export default Cronometro;
