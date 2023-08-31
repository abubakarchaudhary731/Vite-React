import React from 'react';
import HeadNavbar from './Components/Navbar';
import AnimatedRoutes from './Components/AnimatedRoutes';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeadNavbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;