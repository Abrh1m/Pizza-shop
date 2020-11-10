import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
            <div className="home container">
                <h2>
                    Welcome to ST 77 Pizza Shop
                </h2>
                <Link to="/">
                  <button>
                    Choose a Pizza
                  </button> 
                </Link>
            </div>
        )
    
}

export default Home;