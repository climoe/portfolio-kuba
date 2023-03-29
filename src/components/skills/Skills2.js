import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import { X } from "phosphor-react";

import { useLanguageContext } from "../context/LanguageContext";
import { SkillRating } from "./SkillRating";

import "../experimental/clippath/styles.scss"

const Skills2 = () => {

  const [selectedSquare, setSelectedSquare] = useState(null);
  
  const knownTechnologies2Query = graphql`
      query KnownTechnologies2{
          markdownRemark(frontmatter: {id: {eq: "known-technologies"}}) {
              frontmatter {
                  id
                  language{
                      pl{
                          description
                          legend 
                          skills{
                              category 
                              items{
                                  name
                                  rate
                                  description
                              }    
                          }
                      }	
                      en{
                          description
                          legend 
                          skills{
                              category
                              items{
                                  name
                                  rate
                                  description
                              }
                          }
                      }	
                  }
              }
          }
      }
  `;

    const data = useStaticQuery(knownTechnologies2Query);
    const languageContext = useLanguageContext()
    const {description, legend, skills} = languageContext.language === "en"? data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl;
    console.log(Skills, {skills})
    const categories = skills.reduce((acc, curr) => acc.push(curr.category), new Array())
    
    const wrapperVariants = {
      initial: {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", 
        transition: { duration: .4 }
      },
      animate: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition: { duration: .4, staggerChildren: .1 }
      },
      exit: {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        transition: { duration: .4 }
      }
    }
  
    const definedCategories = (categories) => {
      return categories.map((category) => {
       return  <SkillCategory category={category} selectingHandler={() => setSelectedSquare(category)}/> 
      });
    }

    const skillsInCategory = (skills) => {
      return skills.map((skill) => {
        return <Skills items={skill.items} category={skills.category} legend={legend} closeHandler= {() => setSelectedSquare(null)}/>
      })
    }

    return (
      <div className={`cp-transition cp-transition__container`}>
        <AnimatePresence exitBeforeEnter initial={false}>
          {selectedSquare 
            ? (<motion.div 
                className={`card card_wrapper`}
                key="card"
                variants={wrapperVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {skillsInCategory(categories)}
              </motion.div>
            ) : 
            (<motion.div 
                className="cp-transition_squares-wrapper"
                key="squares"
                variants={wrapperVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {definedCategories(categories)}
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    )
  }

  const Skills = ({items, category, legend, closeHandler}) => {
    return (
      <div>
        <div className="card_header">
          <h2>{category}</h2>
          <button onClick={closeHandler}>
            <X size={"4rem"}/>
          </button>
        </div>
        <div className="card_content">
          <div className="card_text-placeholder">
          {items.map((item, i) => {
              return <SkillRating key={i} skillName={item.name} skillRate={item.rate} skillDesc={item.description}/>
          })}
          </div>
          <div>{legend}</div>
        </div>
      </div>
    )

  }
  
  const SkillCategory = ({category, selectingHandler}) => {
    
    const animationVariants = {
      initial: {
        opacity: 0,
        scale: .3,
      },
      animate: {
        opacity: 1,
        scale: 1,
      }
    }
    
    const transition = { duration: .2, type: 'spring' };
    
    return (
      <motion.section 
          key={category}
          className={"square"} 
          onClick={() => selectingHandler()}
          variants={animationVariants}
          transition={transition}
      >
        <motion.header 
          style={{display: "flex", justifyContent:"center", alignItems: "center", border: "2px solid #000", fontWeight: "500", fontFamily: "Inter"}}>
            {category}
        </motion.header>
      </motion.section>  
    )
  }

export default Skills2;