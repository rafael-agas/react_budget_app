import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,dispatch,expenses,currency,remaining } = useContext(AppContext);

    const changeBudget = (newBudget) => {
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

        if(newBudget > 20000) {
            alert("The value cannot exceed remaining funds " + currency + remaining)
        }
        if(newBudget < totalExpenses) {
            alert("You cannot reduce the budget lower than what is already allocated!")
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,

            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type = 'number' step={10} value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
        </div>
    );
};
export default Budget;