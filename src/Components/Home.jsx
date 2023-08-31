import React from 'react';
import {GlobalContext} from '../Context';
import 'bootstrap/dist/css/bootstrap.css';
import { motion } from 'framer-motion';

const Home = () => {
  const {fname , age} = GlobalContext();
  return (
    <motion.div className='text-center'
    initial={{width: 0}} animate={{width: "100%"}} 
    exit={{x: window.innerWidth , transition: {duration: 0.1} }} >
        <h1> I am {fname}   </h1>
        <p> My age is {age} </p>
    </motion.div>
  )
};

export default Home