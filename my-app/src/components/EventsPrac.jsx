import React, {useState} from "react";

function EventsPrac() {

    const[name, setName] = useState("");
    const[count, setCount] = useState(0);
    const[comment, setComment] = useState("");
    const[payment, setPayment] = useState("");
    const[shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function incrementCount() {
        //updater function - a function that is passed as an argument to setState() to update the state.
        //1) Takes the current state to calculate NEXT STATE
        //2) React puts updater function in a queue 
        //3) During the next render, it will call them in the same order

        setCount(prevCount => prevCount + 1);
        //setCount(prevCOunt => prevCount + 1); if uncommented then it will increment the count by 2 instead of 1
    }


    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    //Changing the input changes the state of the name variable and updates the virtual DOM.
    return(
        <div>
            <input value = {name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <textarea value = {comment} onChange = {handleCommentChange} 
            placeholder = "Enter your commment here..."></textarea>
            <p>Comment: {comment}</p>
            
            <select value = {payment} onChange = {handlePaymentChange}>
                <option value =""> Select Payment Method </option>
                <option value ="Visa"> Visa </option>
                <option value ="Mastercard"> Mastercard </option>
                <option value ="Paypal"> Paypal </option>
            </select>

            <label><br/>
                <input type = "radio" value = "Pick up" 
                    checked = {shipping === "Pick up"} onChange = {handleShippingChange}/>
                Pick up
            </label><br/>
            <label>
                <input type = "radio" value = "Delivery" 
                    checked = {shipping === "Delivery"} onChange = {handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    );
}

export default EventsPrac;