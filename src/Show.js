import React from 'react';

export default function Show({ show }) {
  return <div className='show'>
    <p>Name: {show.name}</p>
    <p>Year released: {show.year_released}</p>
    <p>Number of seasons: {show.number_seasons}</p>
    <p>Genre: {show.genre}</p>
  </div>;
}
