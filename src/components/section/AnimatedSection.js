import React, {useEffect} from "react";
import styled  from 'styled-components';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { media, print } from '../common/MediaQueries';


const AnimatedSectionStyle = styled.div`

  margin: 0;
  
  ${media.tablet`
    margin: 0;
    margin-bottom: 2rem;
  `}

  .controls{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    ${media.tablet`
        flex-direction: column;
    `};

  }

  ${print`
      margin: 0;
  `}
`;

const squareVariants = {
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 1 ,
        type: "tween",
        velocity: 5  
      },
      transfrom: "matrix(1,0,0,1,0,0)"
    },
    hidden: { 
      opacity: 0, 
      transform: "matrix(1,0,0,1,0,20)"
    }
}

export function AnimatedSection({children}){
    
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(()=>{
      if(inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
        <AnimatedSectionStyle>
            <motion.div className="controls"
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants}>
                  {children}
            </motion.div>
        </AnimatedSectionStyle>    
    )
}