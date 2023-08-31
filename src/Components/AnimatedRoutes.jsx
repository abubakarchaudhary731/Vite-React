import React from 'react';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import Error from './Error';
import {Routes, Route , useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <div>
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />  
        <Route path='/product' element={<Products />} />  
        <Route path='/contact' element={<Contact /> } /> 
        <Route path='*' element={<Error />} />    
    </Routes>
    </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes