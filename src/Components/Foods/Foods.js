import React from 'react';
import './foods.css'
const Foods = ({data}) => {
   const {strMeal,strInstructions,strMealThumb}=(data);
   const contextFoods=strInstructions.slice(0,100)
   return (
      <div>
         <div className='border-4'>
            <img src={strMealThumb} alt={strMeal} />
            <h1 className='text-black font-bold text-xl py-4'>{strMeal}</h1>
            <p >{contextFoods}</p>
         </div>
      </div>
   );
};

export default Foods;