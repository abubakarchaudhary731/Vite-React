import React from 'react';
import {GlobalContext} from '../Context';

const Home = () => {
  const {fname, age} = GlobalContext();
  return (
    <div>
        <h1> I am {fname}   </h1>. 
        <p> My age is {age} </p>
    </div>
  )
};

export default Home