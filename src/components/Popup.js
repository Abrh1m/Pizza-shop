import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence} from 'framer-motion'

const bDrop = {
    init: {
        opacity: 0
    },
    focus: {
        opacity: 1
    },
    exit: {
        opacity:0,
        transition: {
            type: "spring",
            stiffness: "30",
            delay: 0.5
        }
    }
}

const popup = {
    init: {
        y: '-100vh',
        opacity: 0
    }, 
    focus: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: "30",
            delay: 0.5
        }
    },
    exit: {
        y: '-100vh',
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: "30",
            delay: 0.5
        }
    }
}

const Popup = ({ showPopup, setPopup}) => {
    return (
        <AnimatePresence>
            {
                 showPopup && (
                     <motion.div className="backdrop"
                     variants={bDrop}
                     initial="init"
                     animate="focus"
                     exit="exit"
                     >
                        <motion.div className="popup"
                        variants={popup}
                        
                        >
                            <p>Do you want to make another pizza order?</p>
                            <Link to="/">
                                <button>Start Again</button>
                            </Link>
                        </motion.div>
                     </motion.div>
                 )
            }
        </AnimatePresence>
    )
}

export default Popup;