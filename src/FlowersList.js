import React from 'react';
import Flower from './Flower';

export default function FlowersList({ flowers }) {
  return flowers.map((flower, i) => <Flower key={`${flower}-${i}`} name={flower.name} family={flower.family} kingdom={flower.kingdom} native={flower.native_to} img={flower.img}/>);
}

