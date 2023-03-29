import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { useLanguageContext } from "../context/LanguageContext";
import { ViteSection } from "../section/ViteSection";
import { Course } from "./Course";

export const CourseList = () => {

    const CourseListStyle = styled.ul`

        list-style: none;
        margin-bottom: .8rem;
        padding-inline-start: 0;

    `;   

    const coursesList = graphql`
        query Courses{
            markdownRemark(frontmatter: {id: {eq: "courses"}}) {
                frontmatter {
                    id
                    language{
                        pl{
                            label
                            items{
                                name
                                description
                                owner
                                realized
                            }
                        }
                        en{
                            label
                            items{
                                name
                                description
                                owner
                                realized
                            }
                        }
                    }
                }
            }
        } 
    `;
    const data = useStaticQuery(coursesList)   
    const languageContext = useLanguageContext()
    const {label, items} = languageContext.language === "en"? data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl;


    return (
        <ViteSection id="courses" title= {label}>
            <CourseListStyle>                
                {items.map((item, index) => {
                    return <Course name={item.name} owner={item.owner} description={item.description} realized={item.realized} key={index}/>
                })}
            </CourseListStyle>
        </ViteSection>
        
    )
}