import React, { useRef, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Project } from "./Project";
import { motion } from "framer-motion";

import "../experimental/cardlayout/styles.scss"
import { useLanguageContext } from "../context/LanguageContext";
import { Header2 } from "../common/Typography";

const Experience2 = () => {
  
    const [selectedId, setSelectedId] = useState(null);
    const containerRefs = useRef([]);

    const experience2Query = graphql`
        query Experience2{
            markdownRemark(frontmatter: {id: {eq: "experience"}}) {
                frontmatter {
                    id
                    description
                    language{
                        pl{
                            label
                            experience{
                                time{
                                    from
                                    to
                                }
                                position
                                projects{
                                    name
                                    description
                                    technology{
                                        name
                                    }
                                }
                            }
                        }
                        en{
                            label
                            experience{
                                time{
                                    from
                                    to
                                }
                                position
                                projects{
                                    name
                                    description
                                    technology{
                                        name
                                    }
                                }
                            }    
                        }
                    }
                }
            }
        }         
    `;

    const languageContext = useLanguageContext()
    const data = useStaticQuery(experience2Query);

    const {label, experience} = languageContext.language  === "en" ?  data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl

    return (
        <>
        <div className="layout-cards">
            {experience.map((exp) => (
                exp.projects.map((project, i) => (
                    <motion.div 
                        className={selectedId === project ? 'opened-card' : 'card' }
                        key={i}
                        layout
                        onClick={()=> selectedId === project ? setSelectedId(null) : setSelectedId(project)}
                        ref={el => containerRefs.current[project] = el}
                    >
                    {selectedId === project ? 
                        (<Project className="project" name={project.name} details={project.description} technologies={project.technology} key={i}/> 
                        ) : (<div>{project.name}</div>)
                    }
                    </motion.div>
                ))
            ))
            }
            <motion.div 
                className="dim-layer" 
                animate={{ opacity: selectedId ? .3 : 0 }}
            />
        </div>
        </>
    )
}
export default Experience2;