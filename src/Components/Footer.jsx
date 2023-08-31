import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';

import './style.css';

const Footer = () => {
  return (
    <>
        <div className="container border rounded-4"> 
        <div className="float-end my-3">
        <Link to={'/'} >
            <button className='btn btn-outline-primary'> Get Started </button>
        </Link>
        </div>
        <div className='line-space my-3'>
            <small> Ready to get started? </small> <br />
            <small> Talk to us Today </small>
        </div>
        </div>
{/* Footer  */}

    <footer className='bg-footer'>
    <div className="row row-cols-8 w-100">
    <div className="col "></div>
    <div className="col "></div>
    <div className="col"> 
       <br /><br /> <b> NR Cosmetics </b> <br />
        <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos laborum</small>
    </div>
    <div className="col "></div>
    <div className="col">
       <br /><br /> <small> Follow To get Important Updates: </small> 
        <form action="#">
            <br /><input type="email" className="form-control w-100 text-center" placeholder="Enter Email" required name="Email" /><br />
            <div className='text-center'>
                    <button className='btn btn-primary btn-sm'> Submit </button>
            </div>
        </form>
    </div>
    <div className="col"></div>
 
    <div className="col">
        <br /><br />
        <i> 
            Cell no: <br /> 03070014850 <br />
            Email: <a href="mailto:arslanchaudhary0731@gmail.com"> arslanchaudhary0731@gmail.com </a>
        </i>
    </div>
    
    <div className="col "></div>
    <div className="col "></div>
    </div>

    <div className="social-links">
        <a href="https://goo.gl/maps/fsETPvZHMmaQBbHi6" target='_blank'> <GoogleIcon /> </a>
        <a href="https://www.facebook.com/NRcosmetic731?mibextid=ZbWKwL" target='_blank'> <FacebookOutlinedIcon /> </a>
        <a href="https://instagram.com/nrcosmetics731?igshid=NjIwNzIyMDk2Mg==" target='_blank'>  <InstagramIcon /> </a>
    </div>
    <div className='text-center'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, itaque? elit. Ad, itaque? </p>
        <span> &#169; Copyright Reserved </span>
    </div>
    </footer>
    </>
  )
}

export default Footer