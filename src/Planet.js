import React from 'react';

export default function Planet({ planet }) {
  return <div>
    <p>Name: {planet.name}</p>
    <p>Radius: {planet.radius}</p>
    <p>Distance from the sun:{planet.distance_from_sun}</p>
    <p>Surface area:{planet.surface_area}</p>
  </div>;
}

