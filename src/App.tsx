import Circle from './Circle/Circle';
import './App.css';
import {useState} from 'react';

function App() {
  const [numbers, setNumbers] = useState<number[]>([
    5, 11, 16, 23, 32]);

  const changeNumbers = () => {
    const newNumbers: number[] = [];
    for (let i = 0; newNumbers.length < numbers.length; i++) {
      const randomNumber: number = Math.floor(Math.random() * 32) + 5;
      if (newNumbers.indexOf(randomNumber) === -1) {
        newNumbers.push(randomNumber);
      }
    }
    newNumbers.sort((a, b) => a - b);
    setNumbers(newNumbers);
  };

  return (
    <div className="App">
      <div>
        <button onClick={changeNumbers} className="btn">New numbers</button>
      </div>
      <div className="wrapper">
        <Circle value={numbers[0]}/>
        <Circle value={numbers[1]}/>
        <Circle value={numbers[2]}/>
        <Circle value={numbers[3]}/>
        <Circle value={numbers[4]}/>
      </div>
    </div>
  );
}

export default App;
