import React from 'react';

export default function Dog({ dog }) {
  return <div className='dog'>
    <p>This is {dog.name}, they are a {dog.breed}, they are {dog.age} years old and can sometimes be {dog.behavior}.</p>
    <img src={dog.img} />
  </div>;
}
