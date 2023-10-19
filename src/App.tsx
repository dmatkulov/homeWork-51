import Circle from './Circle/Circle';
import './App.css';
import {useState} from 'react';

function App() {
  const [number, setNumber] = useState<number[]>([
    5, 11, 16, 23, 32]);

  const changeNumbers = () => {
    const initialArr = [5, 11, 16, 23, 32];
    const newArr: number[] = [];
    while (newArr.length < 5) {
      let randomNumber = Math.floor(Math.random() * 36) + 5;
      if (initialArr.indexOf(randomNumber) !== -1) {
        newArr.push(randomNumber);
      }
    }
    console.log(newArr);
    setNumber([]);
  };

  return (
    <div className="App">
      <div>
        <button onClick={changeNumbers}>New numbers</button>
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
