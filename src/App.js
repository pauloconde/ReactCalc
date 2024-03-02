import { useState } from 'react';
import './App.css';

import Button from './components/Button';
import ButtonClear from './components/ButtonClear';
import Display from './components/Display';

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
        <Display input={inputValue} />
        <div className='line'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='line'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>−</Button>
        </div>
        <div className='line'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>×</Button>
        </div>
        <div className='line'>
          <Button handleClic={calcular}> =</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>÷</Button>
        </div>
        <div className='line'>
          <ButtonClear>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
