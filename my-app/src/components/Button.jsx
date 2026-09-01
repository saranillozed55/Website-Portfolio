// import styles from "./Button.module.css"
// ^ modules

function Button() {

    // inline css styling: use camelCases

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    // const handleClick = () => {
    //     console.log("Button clicked!");
    // }

    // const handleClick2 = (name = "Default Name") => {
    //     console.log("Stop clicking me! " + name);
    // }

    const handleClick = (e) => {
        e.target.textContent = "Clicked!";
        console.log(e);
    }

    // If using Modules:
    // return (<button className = {stlyes.button}>Click me</button>)
    // styles.button creates a hash so it has a unique id

    //onClick ={() =>} ... When click on button do this, prevents calling function right away or else it will run when the page loads.

    return (<button className={styles} onClick={(e) => handleClick(e)}>Click me</button>);
}

export default Button