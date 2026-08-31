import PropTypes from "prop-types";

//In order for function to accept props, need to pass a props parameter. A javascript object
function Student({name = "Guest", age = 0, isStudent = false}) {

    return(
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>

    );
}

Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student