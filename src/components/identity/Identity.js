import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage  from "gatsby-image";
import styled from "styled-components";
import { At, PhoneCall, LinkedinLogo, TwitterLogo, GithubLogo} from "phosphor-react";

import { useLanguageContext } from "../context/LanguageContext";
import { FlexColumnSection, FlexColumnDiv, GridSection} from "../common/FlexBox";
import { Header2, Header3, Paragraph } from "../common/Typography";
import Colors from "../common/Colors";
import { print } from "../common/MediaQueries";

import Pin from "../../static/images/location.inline.svg";

const Personal = ({personal, image, id}) => {
    
    const StyledPersonal = styled(FlexColumnSection)`
        flex: 1 0 50%;
        align-items: center;
    `;
    
    const StyledName = styled(Header2)`
        align-self: center;
        font-weight: 900;
        
        text-align: center;

        span {
            display: inline-block;
            font-weight: 300;     
        }
    `;

    const StyledAvatar = styled.div`
        display: inline-block;
        align-self: center;
        position: relative;
    `;

    const AvatarBackground = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
        z-index: 0;
        transform: translateX(8%);
    `;

    const StyledLocation = styled.div`
        display: inline-flex;
        width: auto;
        background-color: ${Colors.DARKEST};
        margin-top: 2.5rem;

    `;

    const StyledPinDiv = styled.span`
        border-color: ${Colors.WHITE};
        border-right: 6px;
        border: 0 solid ${Colors.WHITE};
        padding: .5rem .5rem .5rem 1.25rem; 
    `;

    const StyledPin = styled.span`

        display: inline-block;
        width: 2rem;
        height: 2rem;
    `;

    const StyledCity = styled.span`
        font-size: 2.25rem;
        color: ${Colors.WHITE};
        font-weight: 500;
        padding: .5rem 1.25rem .5rem .5rem;
    `;

    const imageStyle = {
        width:"15rem", 
        height:"15rem", 
        borderRadius: "50%",
        borderStyle: "solid"
    }    

    return (
        <StyledPersonal id={id}>
            <StyledName>{personal.name}<span> |{personal.position}</span></StyledName>
            <StyledAvatar>
                <AvatarBackground/>
                <GatsbyImage style={imageStyle} fadeIn={true} loading={"eager"} fixed={image.childImageSharp.fixed} />
            </StyledAvatar>
            <StyledLocation>
                <StyledPinDiv>
                    <StyledPin>
                        <Pin/>
                    </StyledPin>
                </StyledPinDiv>
                <StyledCity>{personal.city}, {personal.country}</StyledCity>
            </StyledLocation>
        </StyledPersonal>    
    );
}

const Contact = ({contact, socialAccounts}) => {
    
    const StyledContact = styled(FlexColumnDiv)`
        
        align-self: start;

        flex-direction: column;
        justify-content: flex-start;
        align-items: center;


        h2 {
            font-weight: 900;
            align-self: center;
        }

        h3 {
            margin-top: 1rem;
            margin-left: 1rem;
            font-weight: 300;
        }
    `;

    const StyledIcon = styled.span`
        display: inline-flex;

    `;
    const StyledMedium = styled.p`

        align-self: center;
        display: inline-flex;
    `;

    const AccesibilityStyle = styled(FlexColumnDiv)`

        align-self: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        text-align: center;
        font-weight: 500;
        box-align: initial;
    `;


    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const onClickUrl = (url) => {
        return () => openInNewTab(url)
    }  


    return (
        <StyledContact>
            <Header2>{contact.header}</Header2>
            <StyledMedium>
                <StyledIcon>
                    <At size={"2.4rem"} color={"#FF33CC"} weight="duotone"/>
                </StyledIcon>
                {contact.mail}
            </StyledMedium>
            <StyledMedium>
                <StyledIcon>
                    <PhoneCall size={"2.4rem"} color={"#FF33CC"} weight="duotone"/>
                </StyledIcon>
                {contact.phone}
            </StyledMedium>
            <Header2>{socialAccounts.header}</Header2>
            <AccesibilityStyle>
                <LinkedinLogo size={"3rem"} color={`${Colors.PINK}`} weight="duotone" onClick={onClickUrl(socialAccounts.accounts[0].url)}/>
                <TwitterLogo size={"3rem"} color={`${Colors.PINK}`} weight="duotone" onClick={onClickUrl(socialAccounts.accounts[1].url)}/>
                {/* <MediumLogo size={"3rem"} color={`${Colors.PINK}`} weight="duotone" onClick={onClickUrl(socialAccounts.accounts[2].url)}/> */}
                <GithubLogo size={"3rem"} color={`${Colors.PINK}`} weight="duotone" onClick={onClickUrl(socialAccounts.accounts[3].url)}/>
            </AccesibilityStyle>
        </StyledContact>
    )
}


const About = ({about}) => {
    
    const StyledAbout = styled(FlexColumnDiv)`
            
        align-content: flex-start;
        justify-content: center;

        grid-column: 1 / span 2;
        grid-row: 2 / 3;


        h3 {
            margin-top: 1rem;
            margin-left: 1rem;
            text-indent: 10rem;
            font-weight: 300;
        }

        h2 {
            font-weight: 900;
            margin-bottom: 1rem;
        }

    `;

    return (
        <StyledAbout>
            <Header2>{about.header}</Header2>
            <Header3>{about.content}</Header3>
        </StyledAbout>    
    )
}



const LifeSentence = ({sentence, printing}) => {

    const ItalicParagraph = styled(Paragraph)`
        margin-top: .5rem;
        font-size: 1.6rem;
        font-style: italic;
        font-weight: 300;
        text-align: center;
    `;

    const StyledLifeSentence = styled.div`

        grid-column: 1 / span 2;
        grid-row:  3 / 4;

        display: ${props => props.printing === true ? "none;" :"flex;"};

        ${print`
            overflow: hidden;
            height: 0;
        `}

        flex-direction: column;
        align-items: center;

        h2 {
            font-weight: 500;
            margin-bottom: 1rem;
        }
    `;
    
    return(
        <StyledLifeSentence printing={printing}>
            <Header2>{sentence.header}</Header2>
            <ItalicParagraph>{sentence.content}</ItalicParagraph>
        </StyledLifeSentence>
    )
}

export const Identity = () => {
    
    
    const IdentityStyle = styled.div`
        display: block;
        margin-top: 4rem;
        
        ${print`
           margin: 0;
           padding: 0; 
        `} 
    `;

    const identityQuery = graphql`
        query AvatarAndIdentity {
            file(relativePath: {regex: "images//social.jpg/"}) {
                childImageSharp{
                    fixed{
                        src
                    }                 
                }
            }
            markdownRemark(frontmatter: {id: {eq: "personal"}}) {
                frontmatter {
                    id
                    language {
                        pl {
                            contact {
                                header
                                mail
                                phone
                            }
                            about {
                                header
                                content
                            }
                            personal {
                                position
                                name
                                country
                                city
                            }
                            social{
                                header
                                accounts{
                                  url
                                }
                            }    
                            sentence {
                                header
                                content
                            }
                        }
                        en {
                            contact {
                                header
                                mail
                                phone
                            }
                            about {
                                header
                                content
                            }
                            personal {
                                position
                                name
                                country
                                city
                            }
                            social{
                                header
                                accounts{
                                  url
                                }  
                            }                    
                            sentence {
                                header
                                content
                            }
                        }
                    }                      
                }              
            }   
        }
    `;

    const languageContext = useLanguageContext()
    const data  = useStaticQuery(identityQuery);
    const { contact, about, personal, social} = languageContext.language === "en"? data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl;
    const  image  = data.file;
    return (
        <IdentityStyle>
            <GridSection>
                    <Personal id="about" personal={personal} image={image}/>
                    <Contact contact={contact} socialAccounts={social}/>
                    <About about={about}/>
            </GridSection>
        </IdentityStyle>
    )
}
