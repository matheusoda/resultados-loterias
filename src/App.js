import React, {useEffect, useState} from 'react';
import BarraLateralSorteio from './components/BarraLateralSorteio';
import CentroSorteio from './components/CentroSorteio'
import { format, parseISO } from 'date-fns'

import api from './api';

function App() {
  const [dataConcurso, setDataConcurso]= useState('');
  const [concursoId, setConcursoId] = useState(2359);
  const [concursos, setConcursos] = useState({});
  const [numeros, setNumeros] = useState([]);
  const dataFormatada = dataConcurso ? format(parseISO(dataConcurso), 'dd/MM/yyyy') : '06/06/2021';
  const numerosFomatados = numeros ? numeros : ['06, 09, 28, 33, 37, 40']

  useEffect(() => {
    api.get(`/concursos/${concursoId}`)
      .then((response) => setConcursos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
  },[concursoId]);

  useEffect(() => {
    if(concursos !== null) {
      setDataConcurso(concursos.data)
      setNumeros(concursos.numeros)
    }
  }, [concursos])

  console.log("CONCURSO DATA",concursos.data)
  console.log("CONCURSO",concursos)
  return(
    <div className="App">
      <BarraLateralSorteio setConcursoId={setConcursoId} concursoId={concursoId} dataConcurso={dataFormatada}/>
      <div className="centro-sorteio"/>
      <CentroSorteio numeros={numerosFomatados}/>
    </div>
  )
}

export default App