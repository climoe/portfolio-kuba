import React from "react";
import styled from "styled-components";

import { DotsRating } from "./DotsRating";
import Colors from "../common/Colors";
import { print } from "../common/MediaQueries"


export const SkillRating = ({skillName, skillRate, skillDesc}) => {
    
    const SkillRatingStyle = styled.article`
        border-radius: 3rem;
        padding: 2rem 1rem;

        ${print`
            padding: 1rem .5rem;
        `}
    `;

    const SkillNameStyle = styled.h5`
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0 0 .4rem;
        
        ${print`
            font-size: 1rem;
            margin: 0 0 .2rem;
        `}
    `;

    const SkillDescStyle = styled.p`
        font-size: 1.2rem;
        font-weight: 300;
        color: ${Colors.GREY};
        margin: 0;

        ${print`
            font-size: .8rem;
        `}
    `;

    return (
        <SkillRatingStyle>
            <SkillNameStyle>{skillName}</SkillNameStyle>
            <DotsRating range={skillRate}/>
            <SkillDescStyle>{skillDesc}</SkillDescStyle>
        </SkillRatingStyle>
    )
}