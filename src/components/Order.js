import React from 'react';
import {motion, Variants} from 'framer-motion'

const list = {
  init: {
    opacity: 0
  },
  focus: {
    opacity: 1,
    transition: {
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 2
    }
  }
}

const childList = {
  init: {
    opacity: 0,
  },
  focus: { 
    opacity: 1,
    transition: {
      delay: 0.5
    }
  }
}

const Order = ({  pizza }) => {



  const orderList = pizza.type ? (
    <div>
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childList}>You ordered a {pizza.type} pizza</motion.p>
      <motion.p variants={childList}>Including:</motion.p>
      </div>
  ) : (
    <div>
      <h2>Sorry :(</h2>
    <motion.p variants={childList}>There is not any order</motion.p>
    </div>
  );
  
  const toppingList = pizza.toppings ? (
    <div>
    {pizza.toppings.map(topping => <motion.div key={topping} variants={childList}> {topping}</motion.div>)}
    </div>
     ) : (
      <motion.p variants={childList}>Sorry extras not choosen in your order</motion.p>
    );

   
   
  return (
    <motion.div className="container order"
    variants={list}
    initial="init"
    animate="focus"
    >
      
      <div>{orderList}</div>
      <div>{toppingList}</div>
      
    </motion.div>
  )
} 

export default Order;