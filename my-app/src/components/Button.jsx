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

    // If using Modules:
    // return (<button className = {stlyes.button}>Click me</button>)
    // styles.button creates a hash so it has a unique id

    return (<button className={styles}>Click me</button>);
}

export default Button