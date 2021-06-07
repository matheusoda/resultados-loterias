import React, { useEffect, useState } from 'react';
import '../index.css';
import ContainerCentro from './ContainerCentro';
import ContainerSuperior from './ContainerSuperior';
import ContainerInferior from './ContainerInferior'

import api from '../api';

function BarraLateralSorteio({setProps, dataConcurso}) {
  const [loteria, setLoteria] = useState(['0, mega-sena']);
  const [loteriasConcursos, setLoteriasConcursos] = useState([]);
  const [concursoId, setConcursoId] = useState(2359);
  const [concursoName, setconcursoName] = useState("MEGA-SENA");
  
  useEffect(() => {
    loteriasConcursos.filter((e) => {
      if(String(e.loteriaId) === loteria[0]){
      setConcursoId(e.concursoId);
      setconcursoName(loteria.split(",")[1].toUpperCase())
      setProps(concursoId)
      }
    }); 
  }, [loteria])

  useEffect(() => {
    api.get("/loterias-concursos")
      .then((response) => setLoteriasConcursos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
  },[]);

  return(
    <div className="container barra-lateral-esquerda-sorteio" concursoId={concursoId}>
        <ContainerSuperior setLoteria={setLoteria} loteria={loteria}/>
        <ContainerCentro loteriaName={concursoName}/>
        <ContainerInferior concursoId={concursoId} dataConcurso={dataConcurso}/>
    </div>
  )
}

export default BarraLateralSorteio