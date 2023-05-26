import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Currency = () => {

   const {dispatch} = useContext(AppContext);
   const setCurrency = () => {
      const denomination = document.getElementById("denom");
      dispatch({
         type: 'CHG_CURRENCY',
         payload: denomination.value,
      });
   }
   return (
      <div className='alert alert-secondary'> Currency: 
         <select id = 'denom' onChange={(event)=>setCurrency(event.target.value)} className='btn btn-success dropdown-toggle'>
            <option value = "£" defaultValue={"£"} selected class='dropdown-item'>£ Pound</option>
            <option value = "$" className='dropdown-item'>$ Dollar</option>
            <option value= "€" className='dropdown-item'>€ Euro</option>
            <option value = "₹" className='dropdown-item'>₹ Ruppee</option>
         </select>
      </div>
   );
};
export default Currency;