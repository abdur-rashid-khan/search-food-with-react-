import React, { useEffect, useState } from "react";
import Foods from "../Foods/Foods";
import NotFound from "../NotFound/NotFound";
import './Home.css'

const Home = () => {
   const [searchttext, setSearch] = useState("");
   const [food, setFood] = useState([]);

const search = (e) => {
   setSearch(e.target.value);
};
useEffect(() => {
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchttext}`;
         fetch(url)
         .then((res) => res.json())
         .then((data) => setFood(data.meals));
   }, [searchttext]);
   if(!food){
      console.log('No data found');
      alert('No data found');
      <NotFound></NotFound>
      return
   }
return (
   <div className="container mx-auto">
      <div className="input-text text-center py-6">
      <h1 className="text-4xl">Search Foods </h1>
      <input
         className="p-2 border-2 mt-4 rounded" placeholder="search food " type="text" onChange={search}
      />
      </div>
      <div id="foods" className="grid sm:grid-cols-1 gap-4 md:grid-cols-3">
         {
            food.map(foods => <Foods key={foods.idMeal} data={foods}></Foods>)
         }
      </div>
   </div>
);
};

export default Home;

// https://www.themealdb.com/api/json/v1/1/search.php?f=a
