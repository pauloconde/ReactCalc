import React from 'react';
import '../styles/Pantalla.css';

export default function Pantalla({ inputValue, previousValue }) {
  return (
    <div className='screen'>
      <div className='previous-value'>6546 +</div>
      <div className='input-value'>123465.02</div>
    </div>
  );
}
