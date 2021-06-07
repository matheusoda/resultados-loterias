import React from 'react';
import '../index.css';
import ResultadosSorteados from './ResultadosSorteados';

function CentroSorteio({concursos}) {
  console.log("***concursos", concursos)
  return(
    <div className="container barra-lateral-direita-sorteio">
      <ResultadosSorteados />
      <p className="texto-inferio-informativo">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a Caixa</p>
    </div>
  )
}

export default CentroSorteio