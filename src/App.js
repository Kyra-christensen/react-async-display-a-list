import './App.css';
import homer from './homer.gif';
import { useState, useEffect } from 'react';
import PlanetsList from './PlanetsList';
// import your arrays here
import { getPlanets, getDogs } from './services/fetch-utils';

function App() {
  const [planets, setPlanets] = useState([]);
  const [isPlanetLoading, setPlanetLoading] = useState(false);
  const [dogs, setDogs] = useState([]);
  const [isDogLoading, setDogLoading] = useState(false);

  async function fetchAndStorePlanets() {
    setPlanetLoading(true);
    const data = await getPlanets();
    setPlanetLoading(false);
    setPlanets(data);
  }

  async function fetchAndStoreDogs() {
    setDogLoading(true);
    const data = await getDogs();
    setDogLoading(false);
    setDogs(data);
  }

  useEffect(() => {
    fetchAndStorePlanets();
    fetchAndStoreDogs();
  }, []);

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
