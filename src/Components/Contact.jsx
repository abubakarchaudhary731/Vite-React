import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';
import { GlobalContext } from '../Context';
import './style.css';



const Contact = () => {
  const { name, setName, email, setEmail, message, setMessage, sendEmail, form } = GlobalContext();

  return (
    <motion.div className='gradient'
    initial={{width: 0}} animate={{width: "100%"}} 
    exit={{x: window.innerWidth , transition: {duration: 0.1} }} > <br />
      <h2 className='text-center'> Feel Free To Contact Us </h2>
      <div className="row mt-5">
        <div className="col-7">
          <div className='ms-5'>
            <h1> Contact Us </h1>
            <p className='mt-4'> Our Mailing Address Is: </p>
          <div className="row">
            <div className="col-5">
              <small> Shop#4 Siraj-Deen center near Bahria center Shahalam Market Lahore  </small>
            </div>
          </div>
          </div>
          <small className='ms-5 mt-2'> <PhoneIcon /> 0342 5808057 </small> 
        </div>
        <div className="col-5">
        <form  ref={form} onSubmit={sendEmail} >
        <input type="text" 
          className="form-control w-75" 
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Your Name" name="to_name" required  />
          <input type="email"
           value={email}
           onChange={(event) => setEmail(event.target.value)}
           className="form-control w-75 my-4" placeholder="Enter Your Email" name="from_name" required  /> 
          <textarea className="form-control w-75" 
           value={message}
           onChange={(event) => setMessage(event.target.value)}
          placeholder='Enter Your Message' required name="message"  />
        <div className="text-center w-75 mt-4">
          <input type="submit" value="Send" className='btn btn-outline-primary' />
        </div>
        </form>

        </div>
      </div> <br /> <br />
{/* Google Map  */}
<div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.0388212182606!2d74.31729937561386!3d31.5779832741877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b289c293081%3A0x44bb36a5a9747a85!2sNR%20cosmetic!5e0!3m2!1sen!2s!4v1693402503443!5m2!1sen!2s" 
width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>

    </motion.div>
  )
}

export default Contact