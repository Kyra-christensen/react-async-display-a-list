import React from 'react';
// import Native from './Native';
export default function Flower({
  name,
  family,
  kingdom,
  native,
  img
}) {
  return <div className='flower'>
    <p>This is a {name}, they belong to the {family} family and to the {kingdom} kingdom and are native to these areas {native}
      {/* <Native native={native}/> */}
    </p>
    <img src={img} /> 
  </div>;
}
