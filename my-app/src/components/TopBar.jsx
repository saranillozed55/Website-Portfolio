import {HiOutlineMail} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";



function TopBar(){

    return(

        <div className = "top-bar">
            <div className = "top-bar-left">
                <a className = "nav-link" href ="#home">Home</a>
                <a className = "nav-link" href ="#about">About</a>
                <a className = "nav-link" href ="#projects">Projects</a>
            </div>

            <div className = "top-bar-right">
                <a href="https://github.com/saranillozed55" target="_blank" rel="noopener noreferrer" className = "nav-link"> <FaGithub/> </a>
                <a href ="https://www.linkedin.com/in/zedsaranillo/" target="_blank" rel="noopener noreferrer" className = "nav-link"><FaLinkedin/></a>
                <a href ="#projects"></a>
            </div>
        </div>
        
    );

} 
export default TopBar