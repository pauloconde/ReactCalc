import React from 'react';

export default function BotonClear(props) {
  return (
    <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
  );
}
