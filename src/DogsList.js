import React from 'react';
import Dog from './Dog';

export default function DogsList({ dogs }) {
  return dogs.map((dog, i) => <Dog key={`${dog}-${i}`} dog={dog} />);
}

