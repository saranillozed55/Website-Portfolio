import profilePic from "../assets/profilepicture.png"


function Card() {

    return(

        <div className="card">
            <img 
            className = "card-image" 
            src = {profilePic}
            alt ="Profile Picture">
            </img>
            <h2 className= "card-title">Zed Saranillo</h2>
            <p className = "card-text"> Software Engineering Student at San Jose State University</p>
        </div>

    );
}

export default Card