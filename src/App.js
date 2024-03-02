import './App.css';

import Boton from './components/Boton'
import BotonClear from './components/BotonClear'
import Pantalla from './components/Pantalla'


function App() {
  return (
    <div className="App">
      <div className='calculator'>
        <Pantalla input='12345.06'/>
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
          <Boton>-</Boton>
        </div>
        <div className='line'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='line'>
          <Boton > =</Boton>
          <Boton >0</Boton>
          <Boton >.</Boton>
          <Boton >/</Boton>
        </div>
        <div className='line'>
          <BotonClear >
            Clear
          </BotonClear>
        </div>
    </div>
    </div>
  );
}

export default App;
