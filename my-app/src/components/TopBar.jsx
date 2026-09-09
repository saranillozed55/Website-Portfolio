
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

import { motion } from "motion/react";

function TopBar() {
    return (
        <div className="
        flex
        items-center
        justify-between
        px-6
        pt-4
        md:pt-6
        lg:pt-6
        
        border-b
        border-white/20
        pb-4
        
        font-extrabold
        text-lg

        sticky
        top-0
        bg-blend-overlay
        z-50
        bg-[hsl(210,10%,10%)]">

            <div className="
            flex
            items-center
            gap-4
            pl-32">

                <motion.a
                    className="nav-link"
                    href="#home"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0.5, scale: {duration: 0.1}}}

                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Home
                </motion.a>

                <motion.a
                    className="nav-link"
                    href="#about"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 , scale: {duration: 0.1}}}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    About
                </motion.a>

                <motion.a
                    className="nav-link"
                    href="#projects"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 , scale: {duration: 0.1}}}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Projects
                </motion.a>

            </div>

            <div className="
            flex
            items-center
            gap-4
            pr-32
            ">

                <motion.a
                    href="https://github.com/saranillozed55"
                    target="_blank"
                    rel="noopener noreferrer"

                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 , scale: {duration: 0.1}}}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaGithub />
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/zedsaranillo/"
                    target="_blank"
                    rel="noopener noreferrer"

                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 , scale: {duration: 0.1}}}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaLinkedin />
                </motion.a>

                <motion.a
                    href="/ZedResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"

                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 , scale: {duration: 0.1}}}

                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <IoDocumentTextOutline />
                </motion.a>

            </div>

        </div>
    );
}

export default TopBar

