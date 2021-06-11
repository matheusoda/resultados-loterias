import React from 'react';
import '../index.css';

function ContainerSuperior({numero}) {
  console.log("propsnumero", numero)
  return(
    <div className="circulo" >
      <p className="numero">
        {numero}
      </p>
    </div>
  )
}

export default ContainerSuperior