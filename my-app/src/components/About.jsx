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
            max-w-5xl
            mx-auto
            px-6
            ">
                <div className ="flex items-end ">
                    <h2 className="text-4xl">/ About me</h2>
                    <span className = "flex-1 border-b border-dotted border-gray-300 mx-2 mb-1"></span>
                </div>

                <p className = "">
                    Hello, my name is Zed Saranillo and I'm currently a San Jose State University student studying Software Engineering.
                    I have mostly made projects in games and web development, but I am always trying to improve my skills
                    and learn new technologies to become a better developer!
                </p>
            </div>
        </motion.div>
    );
}

export default About