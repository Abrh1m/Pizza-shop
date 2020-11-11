import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const list = {
  init: {
    opacity: 0,
  },
  focus: {
    opacity: 1,
    transition: {
      type: 'spring', 
      stiffness: '40',
      delay: 0.5,
      duration:1.5
    }
    
  },
  exit: {
    y: '-100vw',
    transition: {
      ease: 'linear'
    }
  }
}

const Home = () => {
    return (
            <motion.div className="home container"
            variants={list}
            initial="init"
            animate="focus"
            exit="exit"
            >
                <motion.h2 >Welcome to St 77</motion.h2>
                <Link to="/pizzatype">
                  <motion.button
                  whileHover={{scale: 1.03, boxShadow: "0px 0px 8px rgb(255,255,255)", color: "yellow", fontWeight: "bold"}}
                  >
                    Choose Your Pizza
                  </motion.button> 
                </Link> 
            </motion.div>
        )
    
}

export default Home;