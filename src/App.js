import React, {useEffect, useState} from 'react';
import BarraLateralSorteio from './components/BarraLateralSorteio';
import CentroSorteio from './components/CentroSorteio'
import { format } from 'date-fns'

import api from './api';

function App() {
  const [dataConcurso, setDataConcurso]= useState('2021-06-04T21:17:53.787Z');
  const [concursoId, setConcursoId] = useState(2359);
  const [concursos, setConcursos] = useState({});

  const dataFormatada = format(dataConcurso, 'dd/MM/yyyy');

  useEffect(() => {
    api.get(`/concursos/${concursoId}`)
      .then((response) => setConcursos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
    return setDataConcurso(concursos.data)
  },[concursoId]);

  return(
    <div className="App">
        <BarraLateralSorteio setProps={setConcursoId} dataConcurso={dataFormatada}/>
        <div className="centro-sorteio"/>
        <CentroSorteio concursos={concursos}/>
    </div>
  )
}

export default App