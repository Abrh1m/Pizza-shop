import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
            <motion.div className="home container"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration:1.5}}
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