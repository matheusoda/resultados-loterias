import React from 'react';
import '../index.css';
import imgLogo from '../assets/logo.svg';

function ContainerCentro({loteriaName}) {
  return(
    <div className="container-centro" >
      <img className="logo-sorteio" alt="Logo" src={imgLogo}></img>
      <h1 className="titulo-sorteio">{loteriaName}</h1>
    </div>
  )
}

export default ContainerCentro