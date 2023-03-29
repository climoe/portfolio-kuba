import styled from 'styled-components'
import { media } from './MediaQueries'

import Colors from './Colors'

export const FlexRowSection = styled.section`
    
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    justify-content: space-around;
    margin: 1rem 4rem;

    ${media.tablet`
        margin: 4rem 4rem;
        flex-direction: column;
    `};

`;

export const FlexColumnSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: space-between;

`;

export const FlexColumnJustifiedEnd = styled(FlexColumnSection)`
    align-items: flex-end;
`;

export const FlexRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const FlexColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const FlexRow = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-around;
`;    

export const FlexRowReverse = styled(FlexRow)`
    
    flex-direction: row-reverse;
    margin: 2rem 2rem;
    justify-content: flex-start;
    align-content: flex-start;
`;

export const GridSection = styled.section`
    display: grid;
    grid-template-columns: 40% 40%;
    row-gap: 2rem;
    justify-items: center;
    justify-content: center;
    align-items: center;

`;

export const StyledParagraph = styled.p`
    
    font-size: 1.6rem;
    color: ${Colors.DARKEST};
    font-weight: 300;
    text-align: left;

    padding: 0;
    margin: 0;
`;