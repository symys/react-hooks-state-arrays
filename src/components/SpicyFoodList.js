import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
   setFoods(newFoodArray)
  }

  function handleLiClick(id){
    //remove the food when clicked
    //const cleanArray = foods.filter((food) => food.id !== id)
    //setFoods(cleanArray)

    //update the food heat level when clicked
    const newFoodArray = foods.map((food) => {
      if(food.id === id){
        //this salving also works
        //why we need to create a copy of food
          //food.heatLevel = food.heatLevel + 1
          //return food

         return{ ...food,
        heatLevel: food.heatLevel + 1}
      }
      else{
        return food
      }
    })

    setFoods(newFoodArray)
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
