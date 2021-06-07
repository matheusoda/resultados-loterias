import React from 'react';
import '../index.css';

function ContainerSuperior(props) {
  return(
    <div className="circulo" >
      <p className="numero">
        {props.numero}
      </p>
    </div>
  )
}

export default ContainerSuperior