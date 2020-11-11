import React, {useEffect} from 'react';
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
  },
  exit: {
    y: '-100vw',
    transition: {
      ease: 'linear'
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

const Order = ({ setPopup, pizza }) => {

  useEffect(() => {
    setTimeout(() => {
      setPopup(true)
    }, 5000)
  }, [setPopup])

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
    exit="exit"
    >
      
      <div>{orderList}</div>
      <div>{toppingList}</div>
      
    </motion.div>
  )
} 

export default Order;