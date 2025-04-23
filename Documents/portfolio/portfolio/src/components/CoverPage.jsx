import React from "react";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";


const CoverPage=()=>{
    const navigate=useNavigate();
    return(
        <div className="cover-container">
            <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>The Journey of Akshaya</motion.h1>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>From curious coder to Full-stack explorer</motion.p>
            <motion.button
            className="start-btn"
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            onClick={()=>navigate('/chapter1')}>Start the Journey</motion.button>
        </div>
    )
}
export default CoverPage;