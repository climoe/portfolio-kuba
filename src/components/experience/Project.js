import React from "react";
import styled from "styled-components";
import { Technology } from "./Technology";

import Colors from "../common/Colors";
import { print } from "../common/MediaQueries";

export const Project = ({name, details, role, technologies}) => {

    const ProjectStyle = styled.section`
 
        padding-left: .5rem;
        padding-right: .5rem;
        margin-top: .5rem;

        ${print`
            page-break-inside: avoid;
        `}
    `;
    
    const ProjectName = styled.h5`
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 0;
    `;

    const ProjectDetails = styled.article`
        font-size: 1.4rem;
        font-weight: 300;
        color: ${Colors.GREY};
        
    `;
    
    const ProjectRole = styled.article`
        font-size: 1.4rem;
        font-weight: 300;
        color: ${Colors.GREY};
        
    `;

    const ProjectTechnologies = styled.p`
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: .5rem;
        page-break-inside: avoid;

        ${print`
            page-break-inside: avoid;
        `}
    `;

    return (
        <ProjectStyle>
            <ProjectName>{name}</ProjectName>
            <ProjectDetails>{details}</ProjectDetails>
            <ProjectRole>{role}</ProjectRole>
            <ProjectTechnologies>
                {technologies.map((tech, index) => {
                    return (<Technology name={tech.name} key={index}/>)
                })}
            </ProjectTechnologies>
        </ProjectStyle>
    )
}