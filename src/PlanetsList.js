import React from 'react';
import Planet from './Planet';
export default function PlanetsList({ planets }) {
  return planets.map((planet, i) => <Planet key={`${planet}=${i}`} planet={planet} />);
}

