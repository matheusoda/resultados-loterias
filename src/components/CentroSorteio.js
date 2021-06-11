import React from 'react';
import '../index.css';
import ResultadosSorteados from './ResultadosSorteados';

function CentroSorteio({numeros}) {
  console.log("***numeros", numeros)
  return(
    <div className="container barra-lateral-direita-sorteio">
      <ResultadosSorteados numeros={numeros} />
      <p className="texto-inferio-informativo">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a Caixa</p>
    </div>
  )
}

export default CentroSorteio