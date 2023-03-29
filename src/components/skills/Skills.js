import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";


import { SkillRating } from "./SkillRating";
import { ViteSection } from "../section/ViteSection";
import Colors from "../common/Colors";
import { media, print } from "../common/MediaQueries";
import { useLanguageContext } from "../context/LanguageContext";


export const Skills = () => {

    const SkillsStyle = styled.div`

        page-break-inside:  avoid;
        ${print`
            font-size: 1rem !important;
        `}

    `;

    const SkillsGridStyle = styled.section`
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        column-gap: 0;
        row-gap: 0.2rem;

        ${media.mlaptop`
            grid-template-columns: 20% 20% 20% 20% 20%;
        `}

        ${media.tablet`
            grid-template-columns: 25% 25% 25% 25%;
        `}

        ${print`
            grid-template-columns: 15% 15% 15% 15% 15% 15%;
            column-gap: .2rem;
            row-gap: .2rem;
        `
        }
    `;

    const CategoryGridStyle = styled.section`
        display: grid;
        grid-template-columns: 100%;
        padding: 0;
        margin: 0;
    `;

    const CategoryStyle = styled.section`
        padding:0;
        margin: 0;
        page-break-inside: avoid;
    `;

    const SkillsCategory = styled.h4`
        font-size: 1rem;
        color: ${Colors.GREY};
        margin: 1.5rem 0 0;
        padding-left: 1rem;
        page-break-inside: avoid;

        ${print
        ` font-size: 1.2rem;
          margin: 1rem 0 0;
          padding-left: 0.5rem;
        `}
    `;

    const SkillsLegend = styled.p`
        font-size: 1.2rem;
        font-weight: 300;
        color: ${Colors.GREY};
        ${print`
            font-size: 1rem;
        `}
    `;    

    const knownTechnologiesQuery = graphql`
        query KnownTechnologies{
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

    const data = useStaticQuery(knownTechnologiesQuery);
    const languageContext = useLanguageContext()
    const {description, legend, skills} = languageContext.language === "en"? data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl;

    return (
        <ViteSection id="technology" title={description}>
            <SkillsStyle>
                <CategoryGridStyle>
                {skills.map((skill, index) => {
                    return (
                        <CategoryStyle>
                            <SkillsCategory key={index}>{skill.category}</SkillsCategory>
                            <SkillsGridStyle>
                                {skill.items.map((item, index) => {
                                    return <SkillRating skillName={item.name} skillRate={item.rate} skillDesc={item.description} key={index}/>;
                                })}
                            </SkillsGridStyle>
                        </CategoryStyle>                        
                )})}
                </CategoryGridStyle>
                <SkillsLegend>{legend}</SkillsLegend>
            </SkillsStyle>
        </ViteSection>
    )
}