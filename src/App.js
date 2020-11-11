import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PizzaTypes from './components/PizzaTypes';
import Toppings from './components/Toppings';
import Order from './components/Order';

function App() {
  const [pizza, setPizza] = useState({type: "", toppings: [] });

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
     <Switch>  
       <Route path="/pizzatype">
         <PizzaTypes addType={addType} pizza={pizza} />
       </Route>
       <Route path="/toppings">
         <Toppings addTopping={addTopping} pizza={pizza} />
       </Route>
       <Route path="/order">
         <Order addTopping={addTopping} pizza={pizza}/>
       </Route>      
       <Route path="/">
         <Home />
       </Route>      
     </Switch>
    </>
  );
}

export default App;
