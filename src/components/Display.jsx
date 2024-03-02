import React from 'react';
import '../styles/Display.css';

export default function Display({ inputValue, previousValue }) {
  return (
    <div className='display'>
      <div className='previous-value'>6546 +</div>
      <div className='input-value'>123465.02</div>
    </div>
  );
}
