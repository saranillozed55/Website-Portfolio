import React, {useState} from 'react';

function HooksPrac() {

    // useState function returns an array with two elements. A variable and a setter function to update the variable.
    const [name, setName] = useState("Guest"); // whatever is inside the parenthesis is the default value  
    const [number, setNumber] = useState(0);

    const updateName = () => {
        setName("Zed");
    }
    const updateNumber = () => {
        setNumber(number + 1);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
            <button onClick={updateName}>Set Name</button>
            <button onClick ={updateNumber}>Update Number</button>

        </div>
        
    );
}
export default HooksPrac