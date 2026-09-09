import {motion} from "motion/react"


function TestRotate() {

    const box = {
        width: 100,
        height: 100,
        backgroundColor: "red",
        borderRadius: 5,
    }

    return (

        <motion.div
            style = {box}
            animate = {{rotate:360}}
            transition = {{duration: 1,
                repeat: Infinity,
                ease: "linear"
            }}        
            />
    );
}

export default TestRotate