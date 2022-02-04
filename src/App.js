import './App.css';
import { useState, useEffect } from 'react';
// import your arrays here
import { getPlanets } from './services/fetch-utils';

function App() {
  const [planets, setPlanets] = useState([]);
  const [isPlanetLoading, setPlanetLoading] = useState(false);

  async function fetchAndStorePlanets() {
    setPlanetLoading(true);
    const data = await getPlanets();
    setPlanetLoading(false);
    setPlanets(data);
  }

  useEffect(() => {
    fetchAndStorePlanets();
  });
  
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
    </div>
  );
}

export default App;
