import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { GlobalContext } from '../Context';

import './style.css';

const Footer = () => {
    const {email , setEmail, sendEmail, form } = GlobalContext();
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
    <div className="row row-cols-3 w-100">
    <div className="col text-center"> 
       <br /><br /> <b> NR Cosmetics </b> <br />
        <small className='mx-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos laborum  elit. Quas eos laborum </small>
    </div>
    <div className="col text-center">
       <br /><br /> <small> Follow To get Important Updates: </small> 
        <form ref={form} onSubmit={sendEmail}>
            <br /><input type="email" className="form-control w-50 mx-auto text-center" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter Email" required name="from_name" /><br />
            <div>
                <button className='btn btn-primary btn-sm'> Submit </button>
            </div>
        </form>
    </div>
 
    <div className="col text-center">
        <br /><br />
        <i> 
            <b> Cell no: </b><br /> 0307-0014850 <br />
            <b> Email: </b> <br /> <a href="mailto:arslanchaudhary0731@gmail.com"> arslanchaudhary0731@gmail.com </a>
        </i>
    </div>
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