import React, {useState} from "react";

function EventsPrac() {

    const[name, setName] = useState("");
    const[count, setCount] = useState(0);
    const[comment, setComment] = useState("");
    const[payment, setPayment] = useState("");
    const[shipping, setShipping] = useState("");

    //update objects in state
    const[car, setCar] = useState({year: 2026, make: "Volkswagen", model: "Tiguan"});

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

    //Update Objects in state
    function handleYearChange(event) {
        //... is the spread operator, retain previous properties of 
        //'car' object and only update the year property to 2025
        setCar(prevCar => ({...prevCar, year: event.target.value})); 
    }

    function handleModelChange(event) {
        setCar(prevCar => ({...prevCar, model: event.target.value}));
    }

    function handleMakeChange(event) {
        setCar(prevCar => ({...prevCar, make: event.target.value}));
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

            <div>
                <p>Your favorite car: {car.make} {car.model} ({car.year})</p>
                <input type = "number" value = {car.year} onChange = {handleYearChange}/><br/>
                <input type = "text" value = {car.make} onChange = {handleMakeChange}/><br/>
                <input type = "text" value = {car.model} onChange = {handleModelChange}/><br/>
            </div>


            

        </div>
    );
}

export default EventsPrac;