import React from 'react';
import '../styles/ButtonClear.css'

export default function ButtonClear(props) {
  return (
    <div className='button-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
  );
}
