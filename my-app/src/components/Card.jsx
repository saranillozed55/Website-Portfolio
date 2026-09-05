// import profilePic from "../assets/profilepicture.png"
import profilePic from "../assets/profileportfolio.jpg";
import {animate, svg} from 'animejs';
import {useEffect} from 'react';

function Card() {

    useEffect(() => {
    animate(".profile-image", 
        {
            opacity:[0,1],
        }
    );
    animate(svg.createDrawable('.profile-border'), {
        draw: ['0 0', '0 1'],
        duration: 2000,
        ease: 'inOutQuad',
    });

    }, []) // [] runs the componenet when it is first added to the page
    

    return(
        <>
        <div className="profile-container">
            <img className = "profile-image" src = {profilePic} alt = "Profile Picture"></img>

            <svg className = "profile-border" viewBox = "0 0 250 250">
                <rect
                    className = "border-path"
                    x="2"
                    y="2"
                    rx ="20" //cornerRadius
                    width = "247"
                    height = "247"
                    fill="none"
                    stroke="white"
                    strokeWidth ="3"
                />
            </svg>
        </div>
        </>
    );
}

export default Card