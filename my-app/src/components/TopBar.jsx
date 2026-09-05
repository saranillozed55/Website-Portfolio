import {HiOutlineMail} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";



function TopBar(){

    return(

        <div className = "top-bar">
            <div className = "top-bar-left">
                <div className = "nav-link-animation">
                    <a className = "nav-link" href ="#home">Home</a>
                </div>
                <div className = "nav-link-animation">
                    <a className = "nav-link" href ="#about">About</a>
                </div>
                
                <div className = "nav-link-animation">
                <a className = "nav-link" href ="#projects">Projects</a>
                </div>

            </div>

            <div className = "top-bar-right">
                <a href="https://github.com/saranillozed55" target="_blank" rel="noopener noreferrer" className = "nav-link"> <FaGithub/> </a>
                <a href ="https://www.linkedin.com/in/zedsaranillo/" target="_blank" rel="noopener noreferrer" className = "nav-link"><FaLinkedin/></a>
                <a href ="/ZedResume.pdf" target = "blank" rel = "noopener noreferrer" className = "nav-link"><IoDocumentTextOutline/>Resume</a>
            </div>
        </div>  
    );
} 
export default TopBar