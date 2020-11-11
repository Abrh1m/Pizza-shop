import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const list = {
  init: {
    opacity: 0,
    y: '100vw'
  },
  focus: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring', 
      stiffness: '40',
      delay: 0.3
    }
  },
  exit: {
    y: '-100vw',
    transition: {
      ease: 'linear'
    }
  }
}

const button = {
  init: {
    opacity: 0
  }, 
  focus: {
    opacity: 1,
    transition: {
      delay: 3
    }
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['jalapenos', 'mushrooms', 'extra meat', 'onions', 'olives', 'extra cheese'];

  return (
    <motion.div className="toppings container"
    variants={list}
    initial="init"
    animate="focus"
    exit="exit"
    >
      
      <motion.h3>Step 2: Choose Extras</motion.h3> 
      <ul>
        {toppings.map(topping => {
         let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li 
            whileHover={{scale:1.3, originX:0, color: "yellow"}}
            transition={{ type: 'spring', stiffness: '150'}}
        
            key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <motion.div variants={button}>

      
      <Link to="/order">
        <motion.button 
         
         whileHover={{scale: 1.03, boxShadow: "0px 0px 8px rgb(255,255,255)", color: "yellow", fontWeight: "bold"}}
        >
          Order
        </motion.button>
      </Link>

      </motion.div>       
      </motion.div>
  )
}

export default Toppings;