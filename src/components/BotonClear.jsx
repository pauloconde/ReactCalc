import React from 'react';
import '../styles/BotonClear.css'

export default function BotonClear(props) {
  return (
    <div className='button-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
  );
}
