import './App.css';
import { useState, useEffect } from 'react';
// import your arrays here
import { getPlanets } from './services/fetch-utils';

function App() {
  const [planets, setPlanets] = useState([]);
  
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
    </div>
  );
}

export default App;
