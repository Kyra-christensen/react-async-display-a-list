import React from 'react';

export default function Planet({ planet }) {
  return <div>
    <p>{planet.name}</p>
    <p>{planet.radius}</p>
    <p>{planet.distance_from_sun}</p>
    <p>{planet.surface_area}</p>
  </div>;
}

