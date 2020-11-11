import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['jalapenos', 'mushrooms', 'extra meat', 'onions', 'olives', 'extra cheese'];

  return (
    <div className="toppings container">
      
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

      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ delay: 2}}
      >

      
      <Link to="/order">
        <motion.button 
         
         whileHover={{scale: 1.03, boxShadow: "0px 0px 8px rgb(255,255,255)", color: "yellow", fontWeight: "bold"}}
        >
          Order
        </motion.button>
      </Link>

      </motion.div>       
      </div>
  )
}

export default Toppings;