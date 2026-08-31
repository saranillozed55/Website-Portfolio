
// A component is a small section of code that can inclue JavaScript and HTML, will return that code and make it reusable
function Food() {

    const food1 = "Strawberry";
    const food2 = "Kimchi";
    const food3 = "Orange";

    return(
        <ul>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food3.toUpperCase()}</li>
        </ul>

    );
}

export default Food;