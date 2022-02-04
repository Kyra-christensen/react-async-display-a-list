import './App.css';
import homer from './homer.gif';
import { useState, useEffect } from 'react';
import PlanetsList from './PlanetsList';
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
      <h3>Planets</h3>
      {
        isPlanetLoading
          ? <img src={homer} />
          : <div className='planets-list'>
            <PlanetsList planets={planets} />
          </div>
      }
    </div>
  );
}

export default App;
