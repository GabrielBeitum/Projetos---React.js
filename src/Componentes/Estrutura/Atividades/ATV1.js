import React, { useState, useEffect } from 'react';
import "./Utilitarios/CSS/ATV1.css"
import { Link } from 'react-router-dom';

function DataAtual() {
  const [data, setData] = useState(new Date());
  const [hora, setHora] = useState(data.getHours());
  const [minuto, setMinuto] = useState(data.getMinutes());
  const [segundo, setSegundo] = useState(data.getSeconds());

  useEffect(() => {
    const timer = setInterval(() => {
      const newData = new Date();
      setData(newData);
      setHora(newData.getHours());
      setMinuto(newData.getMinutes());
      setSegundo(newData.getSeconds());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const obterDiaDaSemanaPorExtenso = (diaDaSemana) => {
    const diasDaSemana = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    return diasDaSemana[diaDaSemana];
  };

  function formatarNumero(numero) {
    return numero < 10 ? "0" + numero : numero;
  }

  const formatarData = () => {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const diaDaSemana = data.getDay();
    const diaDaSemanaFormatado = obterDiaDaSemanaPorExtenso(diaDaSemana);

    return `${diaDaSemanaFormatado}, ${dia} de ${mes} de ${ano}`;
  };

  return (
    <div>
      <div className='GeralATV1'>
        <div className='Calendario'>
          <h1 className='Hora'>
            {formatarNumero(hora)}:{formatarNumero(minuto)}:{formatarNumero(segundo)}
          </h1>
          <h1 className='Data'>
            {formatarData()}
          </h1>
        </div>
        {<Link className='Link' to={"/"}>Home</Link>}
      </div>
    </div>
  );
}

export default DataAtual;