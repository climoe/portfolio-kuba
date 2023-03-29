import React from "react";
import styled from "styled-components";
import { Check, CheckCircle, Hourglass } from "phosphor-react";

import Colors from "../common/Colors";
import { print } from "../common/MediaQueries"

export const Course = ({ name, owner, description, realized}) => {

    const CourseStyle = styled.article`
        display: flex;
        font-size: 1.2rem;
        font-weight: 500;
        align-items: flex-end;
        
        ${print`
            page-break-inside: avoid;
        `}
    `;

    const CourseName = styled.p`
        font-size: 1.4rem;
        font-weight: 500;
        padding-left: .8rem;
    `;

    const CourseDescription = styled.span`
        font-size: 1rem;
        padding-left: .8rem;
        margin-bottom: 1.5rem;
    `;

    const CourseOwner = styled.span`
        font-size: 1rem;
        font-style: italic;
        font-weight: bold;
        padding-left: .8rem;
        margin-bottom: 1.5rem;
    `;

    const CourseRealization = styled.i`
        border: 1px ${Colors.GREEN_LIGHTER};
        font-size: 2rem;
        margin-bottom: .8rem;
    `


    return (
        <CourseStyle>
            {realized === true ? 
                <CourseRealization>
                    <CheckCircle size={"2rem"} color={`${Colors.PINK}`}/>
                </CourseRealization> : 
                <CourseRealization>
                    <Hourglass size={"2rem"} color={`${Colors.PINK}`}/>
                </CourseRealization>
            }
            <CourseName>
                {name} - 
                <CourseDescription>{description}</CourseDescription>
                <CourseOwner>{owner}</CourseOwner>
            </CourseName>
        </CourseStyle>
    )

} 