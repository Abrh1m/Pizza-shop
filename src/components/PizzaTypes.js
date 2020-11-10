import React from 'react';
import { Link } from 'react-router-dom'


const PizzaTypes = ({addType, pizza}) => {
    const pizzaTypes = [Pepperoni, Mexican, Margharita, Spanish]

    return (
        <div className="base-page">
            <h2>Choose your pizza</h2>
            <ul>
                {pizzaTypes.map(pizzaType => {
                    let spanClass = pizza.pizzaType === pizzaType ? 'active' : '';
                    return(
                        <li key={pizzaType} onClick={() => addType(pizzaType)}>
                            <span className="spanClass">{pizzaType}</span>
                        </li>

                    )
                })}
            </ul>

            {pizza.pizzaType && (
                <div>
                    <Link to="/toppoings">
                        <button>
                            Next
                        </button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default PizzaTypes;