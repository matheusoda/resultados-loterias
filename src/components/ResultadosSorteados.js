import React from 'react';
import '../index.css';
import NumerosSorteados from './NumerosSorteados'

function ResultadosSorteados({numeros}) {

  console.log("Numeros Resultados", numeros)
  return(
    <div className="resultados" >
      {numeros.map((e, index) => (
        <NumerosSorteados key={index} numero={e}/>
      ))
      }
    </div>
  )
}

export default ResultadosSorteados