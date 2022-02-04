import './App.css';
import homer from './homer.gif';
import { useState, useEffect } from 'react';
import PlanetsList from './PlanetsList';
import DogsList from './DogsList';
import ShowsList from './ShowsList';
// import your arrays here
import { getPlanets, getDogs, getShows, getFlowers } from './services/fetch-utils';

function App() {
  const [planets, setPlanets] = useState([]);
  const [isPlanetLoading, setPlanetLoading] = useState(false);
  const [dogs, setDogs] = useState([]);
  const [isDogLoading, setDogLoading] = useState(false);
  const [shows, setShows] = useState([]);
  const [isShowLoading, setShowLoading] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const [isFlowerLoading, setFlowerLoading] = useState(false);

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

  async function fetchAndStoreShows() {
    setShowLoading(true);
    const data = await getShows();
    setShowLoading(false);
    setShows(data);
  }

  async function fetchAndStoreFlowers() {
    setFlowerLoading(true);
    const data = await getFlowers();
    setFlowerLoading(false);
    setFlowers(data);
  }

  useEffect(() => {
    fetchAndStorePlanets();
    fetchAndStoreDogs();
    fetchAndStoreShows();
    fetchAndStoreFlowers();
  }, []);

  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <h3>Planets:</h3>
      {
        isPlanetLoading
          ? <img src={homer} />
          : <div className='planets-list'>
            <PlanetsList planets={planets} />
          </div>
      }

      <h3>Dogs:</h3>
      {
        isDogLoading
          ? <img src={homer} />
          : <div className='dogs-list'>
            <DogsList dogs={dogs} />
          </div>
      }

      <h3>Netflix Shows:</h3>
      {
        isShowLoading
          ? <img src={homer} />
          : <div className='shows-list'>
            <ShowsList shows={shows} />
          </div>
      }
    </div>
  );
}

export default App;
