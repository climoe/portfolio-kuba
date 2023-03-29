import styled from "styled-components";

import Colors from "../common/Colors";
import { print } from "../common/MediaQueries";
import { Header1, LargeParagraph } from "../common/Typography";

import splash from "../../static/images/splash.svg"

export const IntroSection = styled.section`

    //height: 80vh;
    padding: 10rem 0;
    margin: 0 auto;

    background-image: url("${splash}");
    background-size: contain;
    background-position: right top;
    background-repeat: no-repeat;

    ${Header1} {
        color: ${Colors.DARKEST};
    }

    ${LargeParagraph} {
        padding: 0 3rem;
    }

    ${print`
        background: white;
    `}
`;
