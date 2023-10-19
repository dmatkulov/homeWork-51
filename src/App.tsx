import Circle from './Circle/Circle';
import './App.css';
import {useState} from 'react';

function App() {
  const [number, setNumber] = useState<number[]>([
    5, 11, 16, 23, 32
  ]);

  const changeNumbers = () => {

  }

  return (
    <div className="App">
      <div>
        <button>New numbers</button>
      </div>
      <div className="wrapper">
        <Circle value={number[0]}/>
        <Circle value={number[1]}/>
        <Circle value={number[2]}/>
        <Circle value={number[3]}/>
        <Circle value={number[4]}/>
      </div>
    </div>
  );
}

export default App;
