import { useState } from 'react';
import './App.css';

import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';

function App() {
  let previousValue = 500;
  let [inputValue, setInputValue] = useState(0);
  let operator = '';

  const calcular = () => {
    if (operator !== '') {
      switch (operator) {
        case '+': {
          setInputValue(previousValue + inputValue);
          previousValue = 0;
          operator = '';
          break;
        }
        case '−': {
          setInputValue(previousValue - inputValue);
          previousValue = 0;
          operator = '';
          break;
        }
        case '×': {
          setInputValue(previousValue * inputValue);
          previousValue = 0;
          operator = '';
          break;
        }
        case '÷': {
          if (inputValue !== 0) {
            setInputValue(previousValue / inputValue);
            previousValue = 0;
            operator = '';
          }
          break;
        }
        default: {
          break;
        }
      }
    }
  };

  return (
    <div className='App'>
      <div className='calculator'>
        <Pantalla input={inputValue} />
        <div className='line'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='line'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>−</Boton>
        </div>
        <div className='line'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>×</Boton>
        </div>
        <div className='line'>
          <Boton handleClic={calcular}> =</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>÷</Boton>
        </div>
        <div className='line'>
          <BotonClear>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
