import React, { useEffect, useState } from 'react';
import '../index.css';

import api from '../api';


function ContainerSuperior({setLoteria, loteria}) {
  const [loterias, setLoterias] = useState([]);
  useEffect(() => {
    api.get("/loterias")
      .then((response) => setLoterias(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
  },[]);

  return(
    <div className="container-superior" >
      <select value={loteria} onChange={e =>setLoteria(e.target.value)}>
        {
        loterias.map((loteria) =>(
        <option key={loteria.id} value={[loteria.id, loteria.nome]}>{loteria.nome.toUpperCase()}</option>
        ))}
      </select>
    </div>
  )
}

export default ContainerSuperior