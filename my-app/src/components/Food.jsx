import React, {useState} from "react";
// A component is a small section of code that can inclue JavaScript and HTML, will return that code and make it reusable
function Food() {

    // const food1 = "Strawberry";
    // const food2 = "Kimchi";
    // const food3 = "Orange";

    const[foods, setFoods] = useState(["Apple"]);

    function handleAddFood() {
       const newFood = document.getElementById("foodInput").value; 
       document.getElementById("foodInput").value = "";

       setFoods(prevFoods => [...prevFoods, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index)); //_ means we don't care about the first parameter
    }

    return(
        // <ul>
        //     <li>{food1}</li>
        //     <li>{food2}</li>
        //     <li>{food3.toUpperCase()}</li>
        // </ul>

        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food,index) => <li key = {index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type = "text" id = "foodInput" placeholder = "Enter a food item"/>
            <button onClick = {handleAddFood}>Add Food</button>
        </div>

    );
}

export default Food;