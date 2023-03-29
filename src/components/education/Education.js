import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useLanguageContext } from "../context/LanguageContext";
import Colors from "../common/Colors";
import { ViteSection } from "../section/ViteSection";

const LifetimeEventStyle = styled.ul`
  
    font-size: 1.6rem;
    width: 100%; 
    list-style: none;
    padding-left: 0;

    li {
        display: flex; 
        color: ${Colors.DARKEST};
    }

    time { 
      position: relative;
      font-weight: bold;
      writing-mode: vertical-rl;
      font-size: 1.4rem;
      text-orientation: sideways;       
      padding-right: 1rem;
      border-right: .2rem ${Colors.DARKEST} solid ;

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

    span {
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
      display: block;
      font-weight: 500;
    }
`;

export const Education = () => {
    const lifeTimeEventsQuery = graphql`
      query LifeTimeEvents{
        markdownRemark(frontmatter: {id: {eq: "lifetime"}}) {
          frontmatter {
            id
            language {
              pl  {
                title
                events {
                  time{
                    from 
                    to
                  }
                  title
                  description
                }	
              }
              en  {
                title
                events {
                  time{
                    from 
                    to
                  }
                  title
                  description
                }	
              }
 
            }
          }
        }
      }  
    `;
  
    const data  = useStaticQuery(lifeTimeEventsQuery)
    const languageContext = useLanguageContext()
    const {title, events} = languageContext.language === "en"? data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl;
    return (
        <ViteSection id="education" title={title}>
          <LifetimeEventStyle>
              {events.map((ev, index) => 
                { return <motion.li whileTap={{ scale: 0.95 }} key={index}>
                    <time>{ev.time.from} - {ev.time.to}</time> 
                    <span><strong>{ev.title}</strong>{ev.description}</span>
                  </motion.li>  
                })
              }  
          </LifetimeEventStyle>
        </ViteSection>

    );
}