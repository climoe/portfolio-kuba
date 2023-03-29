import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";

import { ViteSection } from "../section/ViteSection";
import { Project } from "./Project";
import Colors from "../common/Colors";
import { print } from "../common/MediaQueries";
import { useLanguageContext } from "../context/LanguageContext";


export const Experience = () => {

    const ExperienceStyle = styled.ul`

        font-size: 1.8rem;
        padding-left: 0;
        margin-top: 0;
        
        ${print`
            padding-left: 0;
            margin-top: 0;
        `}

        li {
            display: flex; 
            color: ${Colors.DARKEST};

        }

        time { 
            position: relative;
            writing-mode: vertical-rl;
            text-orientation: sideways; 
            font-size: 1.4rem;           
            font-weight: bold;
            padding-right: 1rem;
            border-right: .2rem ${Colors.DARKEST} solid;
            ${print`
                margin-left: 0;
                padding-left: 0;
                padding-right: 1rem;
            `}

            &::after {
                content: "";
                position: absolute; 
                z-index: 2;
                right: 0;
                top: 0;
                transform: translateX(60%);
                border-radius: 50%;
                background: ${Colors.DARKEST};
                border: .3rem ${Colors.DARKEST} solid;
                width: .5em;
                height: .5em;                
            }
        }

        .position {
            padding: 0 1.5rem 1.5rem 1.5rem;
            position: relative;
    
            &::before {
                content: "";
                position: absolute;
                z-index: 1;
                left: 0;
                height: 100%;
            }
        }

        strong {
            display: inline-block;
            font-weight: 500;
        }
        
    `;

    const experienceQuery = graphql`
        query Experience{
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
                                    role
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
                                    role
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
    const data = useStaticQuery(experienceQuery);

    const {label, experience} = languageContext.language  === "en" ?  data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl

    return (
        <ViteSection id="experience" title={label}>
            <ExperienceStyle>
              {experience.map((exp, index) => 
                { return (
                    <motion.li whileTap={{scale: 0.95}} key={index}>
                        <time>{exp.time.from} - {exp.time.to}</time> 
                        <span className="position">
                            <strong>{exp.position}</strong>
                            { exp.projects.map((p, index) => 
                                {return <Project name={p.name} details={p.description} role={p.role} technologies={p.technology} key={index}/>}
                            )}
                        </span>
                  </motion.li>)  
                })
              }  
            </ExperienceStyle>
         </ViteSection>
    )
}