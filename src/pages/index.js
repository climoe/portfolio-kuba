import React, { useRef } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Printer } from "phosphor-react";
import { useReactToPrint } from 'react-to-print';

import { LanguageContextProvider } from "../components/context/LanguageContext";
import { LanguageSwitch } from "../components/button/switch/LanguageSwitch";

import Colors from "../components/common/Colors";
import GlobalStyles from "../components/common/GlobalStyles";

import { CourseList } from "../components/courses/CoursesList";
import { Education } from "../components/education/Education";
import { Experience } from "../components/experience/Experience";
import { Identity } from "../components/identity/Identity";
import { Skills } from "../components/skills/Skills";


const Printable = styled.main`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: ${Colors.WHITE};
`;

const ProcessingAgree = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0;
    font-size: 1.5rem;
    font-style: italic;
    color: ${Colors.GREY};
    text-align: center;
`;

const LayoutWithRef = React.forwardRef((props, ref) => {
    const {children} = props
    return (
      <div ref={ref}>
        {children}
      </div>
    )
})

const pageStyle = `      
    @page {
        size: A4;
        margin: .5in 0 .5in !important;
    }

    @page:first{
        margin-top: 0;
    }
`; 


const CV = () => {

    const printRef = useRef();

    const useHandlePrint = () => useReactToPrint({
        content: () => printRef.current,
        pageStyle:  () => pageStyle,
        copyStyles: true,
        documentTitle: 'CV - Kamil Klimczak' 
    })

    return (
        <>
            <GlobalStyles/>
            <Helmet title={"Kamil Klimczak | CV"}>
                <html lang="en" />
            </Helmet>
            <LanguageContextProvider> 
                <LayoutWithRef ref={printRef}>
                    <Printable>
                        <LanguageSwitch sticky={true}/>
                        <Identity/>
                        <Experience/>
                        <Education/>
                        <Skills/>
                        <CourseList/>
                        <ProcessingAgree> 
                            <span>
                                "I agree to the processing by Online Solutions Sp. z o.o. my personal data contained in my CV for the recruitment process and further recruitment processes"    
                            </span>
                        </ProcessingAgree>
                    </Printable>
                </LayoutWithRef> 
                <Printer size={"2rem"} color={`${Colors.PINK}`} weight="duotone" onClick={useHandlePrint()}/>
            </LanguageContextProvider>
        </>
    )
}
export default CV;