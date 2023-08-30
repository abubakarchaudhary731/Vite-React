import React from 'react';
import HeadNavbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Error from './Components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <HeadNavbar />
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/product' element={<Products />} />  
          <Route path='/contact' element={<Contact />} /> 
          <Route path='*' element={<Error />} />    
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;