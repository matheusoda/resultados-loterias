import React  from 'react';
import '../index.css';

function ContainerInferior({concursoId, dataConcurso}) {

  return(
    <div className="container-inferior" >
      <p>CONCURSO</p>
      <h1 className="titulo-sorteio">{concursoId} - {dataConcurso}</h1>
    </div>
  )
}

export default ContainerInferior