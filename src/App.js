import React, {useState} from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PizzaTypes from './components/PizzaTypes';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Popup  from './components/Popup'
import { AnimatePresence} from 'framer-motion'

function App() {

  const location = useLocation();

  const [pizza, setPizza] = useState({type: "", toppings: [] }); 
  const [showPopup, setPopup] = useState(false);

  const addType = (type) => {
    setPizza({ ...pizza, type })
  }

  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
     <Header /> 
     <Popup showPopup={showPopup} setPopup={setPopup} />
     <AnimatePresence exitBeforeEnter onExitComplete={() => setPopup(false)}>     
       <Switch location={location} key={location.key}>  
          <Route path="/pizzatype">
            <PizzaTypes addType={addType} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order setPopup={setPopup} pizza={pizza}/>
          </Route>      
          <Route path="/">
            <Home />
          </Route>      
        </Switch>
     </AnimatePresence>

    </>
  );
}

export default App;
