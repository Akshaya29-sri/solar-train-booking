import React from "react";
import {motion} from "framer-motion";
 

const Chapter1=()=>{
    return(
        <div className='chapter-container'>
            <motion.h2 initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}}>Chapter1:The Beginning</motion.h2>
            <motion.div className="timeline" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
                <ul>
                    <li>
                        <strong>2015-2019:</strong>B.E in Computer Science and Engineering
                    </li>
                    <li>Attended workshops on AI, Web-Development and Date structures</li>
                    <li>Fell in love with programming and problem-solving</li>
                </ul>
            </motion.div>
        </div>
    )
}
export default Chapter1;