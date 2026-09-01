import React, {useState} from "react";

function HooksPrac() {

    // useState function returns an array with two elements. A variable and a setter function to update the variable.
    const [name, setName] = useState();  

    const updateName = () => {
        setName("Zed");
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

        </div>
        
    );
}
export default HooksPrac