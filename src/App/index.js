import React, { useState } from 'react';
import './App.scss';

function App() {
  const [domWriting, setDomWriting] = useState('Nothing Here!');

  const handleClick = (e) => {
    console.warn(`You clicked ${e.target.id}`);
    setDomWriting(`You clicked ${e.target.id}! Check the Console!`);
  };

  return (
    <div className='App'>
      <h2>React Weather API</h2>
      <div>
        <button id='this-button' className='btn btn-info' onClick={handleClick}>Button 1</button>
      </div>
      <div>
        <button id='this-button' className='btn btn-secondary' onClick={handleClick}>Button 2</button>
      </div>
      <h3>{domWriting}</h3>
    </div>
  );
}

export default App;
