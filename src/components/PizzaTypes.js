import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants} from 'framer-motion';

const list = {
  init: {
    opacity: 0,
    x: '-100vw'
  },
  focus: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', 
      stiffness: '40',
      delay: 0.3
    }
  }
}

const button = {
  init: {
    x: '100vw'
  }, 
  focus: {
    x: 0,
    transition: {
      type: 'spring', 
      stiffness: 40
    }
  }
}

const PizzaTypes = ({ addType, pizza }) => {
  const types = ['Pepperoni', 'Mexican', 'Margharita', 'Spanish', 'Mediterranean'];

  return (
    <motion.div className="base container"
    variants={list}
    initial="init"
    animate="focus"

    >

      <motion.h3 >Step 1: Choose Your Pizza</motion.h3>
      <ul>
        {types.map(type => { 
          let spanClass = pizza.type === type ? 'active' : '';
          return (
            <motion.li 
            whileHover={{scale:1.3, originX:0, color: "yellow"}}
            transition={{ type: 'spring', stiffness: '150'}}
            key={type} onClick={() => addType(type)}>
              <span className={spanClass}>{ type }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.type && (
        <motion.div className="next" variants={button}>
          <Link to="/toppings">
            <motion.button
             whileHover={{scale: 1.03, boxShadow: "0px 0px 8px rgb(255,255,255)", color: "yellow", fontWeight: "bold"}}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default PizzaTypes;