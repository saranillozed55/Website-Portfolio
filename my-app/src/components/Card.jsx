// import profilePic from "../assets/profilepicture.png"
import profilePic from "../assets/profileportfolio.jpg";

function Card() {

    return(

        <div className="profile-container">
            <img className = "profile-image" src = {profilePic} alt = "Profile Picture"></img>
        </div>

    );
}

export default Card