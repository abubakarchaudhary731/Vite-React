import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Array from './Data';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <motion.div initial={{width: 0}} animate={{width: "100%"}} 
    exit={{x: window.innerWidth , transition: {duration: 0.1} }} >
    {
      Array.map((item, index) => {
        return (
          <div className="row" key={index}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.Image} />
          <Card.Body>
            <Card.Title> {item.name} </Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      
        </div>
        )
      })
    }

    </motion.div>
  )
}

export default Products;