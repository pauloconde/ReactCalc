import React from 'react';
import '../styles/Display.css';

export default function Display({ inputValue, evalValue }) {
  return (
    <div className='display'>
      <div className='eval-value'>{evalValue}</div>
      <div className='input-value'>{inputValue}</div>
    </div>
  );
}
