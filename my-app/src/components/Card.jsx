// import profilePic from "../assets/profilepicture.png"
import profilePic from "../assets/profileportfolio.jpg";

import {motion} from "motion/react"

function Card() {

    // useEffect(() => {
    // animate(".profile-image", 
    //     {
    //         opacity:[0,1],
    //     }
    // );
    // animate(svg.createDrawable('.profile-border'), {
    //     draw: ['0 0', '0 1'],
    //     duration: 2000,
    //     ease: 'inOutQuad',
    // });

    // }, []) // [] runs the componenet when it is first added to the page
    

    return(
        <>
        <article>
            <motion.img
            className="
            w-48
            sm:w-56
            md:w-64
            lg:w-80
            rounded-2xl
            "
            whileHover = {{scale:1.1}}
            src={profilePic}
            alt="Profile Picture"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
    />      
        </article>
        </>
    );
}

export default Card