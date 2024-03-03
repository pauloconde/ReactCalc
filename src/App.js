import { useState } from 'react';
import './App.css';

import Button from './components/Button';
import ButtonClear from './components/ButtonClear';
import Display from './components/Display';
import { evaluate } from 'mathjs';

function App() {
  let [evalValue, setEvalValue] = useState('');
  let [inputValue, setInputValue] = useState(0);
  let [afterEqual, setAfterEqual] = useState(false);

  function handleNumber(num) {
    setInputValue(inputValue === 0 || afterEqual ? num : inputValue + num);
    setEvalValue(afterEqual ? num : evalValue + num);
    if (afterEqual) setAfterEqual(false);
  }

  function handleOperator(operator) {
    switch (operator) {
      case '−': {
        operator = ' - ';
        break;
      }
      case '×': {
        operator = ' * ';
        break;
      }
      case '÷': {
        operator = ' / ';
        break;
      }
      default: {
        operator = ' + ';
        break;
      }
    }
    if (evalValue !== '') {
      setEvalValue(evalValue + operator);
      setInputValue(0);
      setAfterEqual(false);
    }
  }

  function handleEqual() {
    setAfterEqual(true)
    if (inputValue !== 0) {
      setEvalValue(evaluate(evalValue));
      setInputValue(0);
    }
  }

  function handleClear() {
    setEvalValue('');
    setInputValue(0);
    setAfterEqual(false);
  }

  return (
    <div className='App'>
      <div className='calculator'>
        <Display evalValue={evalValue} inputValue={inputValue} />
        <div className='line'>
          <Button handleClic={handleNumber}>1</Button>
          <Button handleClic={handleNumber}>2</Button>
          <Button handleClic={handleNumber}>3</Button>
          <Button handleClic={handleOperator}>+</Button>
        </div>
        <div className='line'>
          <Button handleClic={handleNumber}>4</Button>
          <Button handleClic={handleNumber}>5</Button>
          <Button handleClic={handleNumber}>6</Button>
          <Button handleClic={handleOperator}>−</Button>
        </div>
        <div className='line'>
          <Button handleClic={handleNumber}>7</Button>
          <Button handleClic={handleNumber}>8</Button>
          <Button handleClic={handleNumber}>9</Button>
          <Button handleClic={handleOperator}>×</Button>
        </div>
        <div className='line'>
          <Button handleClic={handleEqual}> =</Button>
          <Button handleClic={handleNumber}>0</Button>
          <Button handleClic={handleNumber}>.</Button>
          <Button handleClic={handleOperator}>÷</Button>
        </div>
        <div className='line'>
          <ButtonClear handleClic={handleClear}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
