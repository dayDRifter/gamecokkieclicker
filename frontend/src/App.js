import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(0);
  const [prizes, setPrizes] = useState(0);
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.post('https://gamecokkieclicker.vercel.app')
      // console.log(response.userId);

      const { counter, points, prizes, reward } = response.data;

      setCounter(counter);
      setPoints(points);
      setPrizes(prizes);
      setMessage(reward ? `You won: ${reward}` : '');

    } catch (error) {
      console.error('Error clicking button:', error);
    }
  };

  return (
    <div className="container">
      <h1>Cookie Clicker Clone</h1>
      <button className="click-button" onClick={handleClick}>
        Click Me!
      </button>
      <p>Counter: {counter}</p>
      <p>Points: {points}</p>
      <p>Prizes: {prizes}</p>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;