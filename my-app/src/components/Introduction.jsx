import {motion} from "motion/react"


function Introduction() {

    return(
        <motion.div className ="
        flex
        flex-col
        "
        
        initial = {{opacity:0}}
        viewPort = {{once:true}}
        whileInView={{opacity: 1}}
        transition = {{duration: 2}}>
            <h1 className ="
        
            text-4xl

            md:text-5xl
            lg:text-7xl

            "
            >Hi, I'm <span className = "text-blue-400">Zed</span></h1>
            <motion.p className ="
            mt-2
            md:pl-2"
            
            > Software Engineer @ SJSU</motion.p>

        </motion.div>
    );
}

export default Introduction