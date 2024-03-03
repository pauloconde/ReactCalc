import React from 'react';
import '../styles/ButtonClear.css'

export default function ButtonClear(props) {
  return (
    <div className='button-clear' onClick={props.handleClic}>
    {props.children}
  </div>
  );
}
