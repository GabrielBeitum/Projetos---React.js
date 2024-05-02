import React, { useState } from 'react';

function DataAtual() {
  const [data, setData] = useState(new Date());

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

  const formatarData = () => {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const diaDaSemana = data.getDay();
    const diaDaSemanaFormatado = obterDiaDaSemanaPorExtenso(diaDaSemana);

    return `${diaDaSemanaFormatado}, ${dia} de ${mes} de ${ano}`;
  };

  return <div>{formatarData()}</div>;
}

export default DataAtual;
