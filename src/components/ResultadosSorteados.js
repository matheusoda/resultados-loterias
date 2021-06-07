import React from 'react';
import '../index.css';
import NumerosSorteados from './NumerosSorteados'

function ResultadosSorteados() {
  return(
    <div className="resultados" >
      <NumerosSorteados numero="06"/>
      <NumerosSorteados numero="09"/>
      <NumerosSorteados numero="28"/>
      <NumerosSorteados numero="33"/>
      <NumerosSorteados numero="37"/>
      <NumerosSorteados numero="40"/>
    </div>
  )
}

export default ResultadosSorteados