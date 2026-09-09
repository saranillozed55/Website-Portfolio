import {motion} from "motion/react"


function About() {


    return(
        <motion.div initial = {{opacity:0, y:50}} 
        whileInView = {{opacity : 1}} 
        viewport = {{once:true, amount: 0.3}}
        id = "about"
        className = "w-full">
            <div className ="
            flex
            flex-col
            gap-3
            max-w-4xl
            mx-auto
            px-6
            ">
                <div className ="
                text-4xl
                ">
                    <h2>/ About me</h2>
                </div>

                <p className = "about-text">
                    Hello, my name is Zed Saranillo and I'm currently a San Jose State University student studying Software Engineering.
                    I have mostly made projects in games and web development, but I am always trying to improve my skills
                    and learn new technologies to become a better developer!
                </p>
            </div>
        </motion.div>
    );
}

export default About