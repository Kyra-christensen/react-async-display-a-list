import React from 'react';
import Show from './Show';

export default function ShowsList({ shows }) {
  return shows.map((show, i) => <Show key={`${show}-${i}`} show={show} />);
}

