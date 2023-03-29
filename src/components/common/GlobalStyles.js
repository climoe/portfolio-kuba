import { createGlobalStyle } from 'styled-components';
import Inter from '../../static/fonts/inter/Inter.ttf';

const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: 'Inter';
    src: url('${Inter}'); 
  }

  html {

    font-size: 62.5%; // 1rem - 10px - 10/16
    margin: 0; 
    padding: 0;

    height: 100%;

    @media screen and (max-width: 20em){
      font-size: 0%;
    }

    @media screen and (min-width: 20em ) and (max-width: 30em) {// to 480px -> sphone
      font-size: 35%
    }

    @media screen and (min-width: 30em) and (max-width: 40em){ //480px - 650px -> phone
      font-size: 50%; //50% * 16px -> 1rem - 8px 
    }

    @media screen and (min-width: 40em) and (max-width: 56.25em){ //650px - 900px -> tablet
      font-size: 62.5%; // 62.5% * 16px -> 1rem - 10px
    }
    
    @media screen and (min-width: 56.25em) and (max-width: 75em) { //900 - 1200px -> laptop  
      font-size: 62.5%; // 62.5% * 16px -> 1rem - 10px
    }

    @media screen and (min-width: 75em){ //from 1200px -> desktop
      font-size: 75%; // 75% * 16px -> 1rem - 12px
    }

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body { 
    
    box-sizing: border-box;
    height: 100%;
    font-size: 1.4rem;
    
    font-family: 'Inter', sans-serif;
    background-color: #eff4f7;
  }


  @keyframes fadein {
    from {
      background-color: transparent;
    }
    to {
      background-color: #ffffff;
    }
  }
  
  @keyframes fadeout {
    from {
      background-color: #ffffff;
    }
    to {
      background-color: transparent;
    }
  }

  @keyframes openclose {
  
    0% {
      top: 0;
      width: 0;
    }
  
    5% {
      width: 0;
    }
  
    15% {
      width: 12rem;
      text-indent:.8rem;
    }
  
    30% {
      top: 0rem;
      width: 12rem;
    }
  
    33% {
      top: 0rem;
      width: 0;
    }
    
    35% {
      top: 0rem;
      width: 0;
    }

    38% {
      top: -4.4rem;
      width: 0;  
    }
  
    48% {
      top: -4.4rem;
      width: 15rem;
      text-indent: .8rem;
    }
  
    63% {
      top: -4.4rem;
      width: 15rem;
    }
  
    66% {
      top: -4.4rem;
      width: 0;
    }

    68%{
      top: -4.4rem;
      width: 0;
    }

    71% {
      top: -8.8rem;
      width: 0;
    }

    81% {
      top: -8.8rem;
      width: 14rem;
      text-indent:.8rem;
    }

    96% {
      top: -8.8rem;
      width: 14rem;
    }

    99% {
      top: -8.8rem;
      width: 0;
      text-indent:.8rem;
    }
    
    100% {
      top: 0;
      width: 0;
    }
  }


  @keyframes moveDown {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }
  
  @keyframes rotate {
    0% {
      transform: rotateY(360deg);
    }
    100% {
      transform: rotateY(0rem);
    }
  }  
`;

export default GlobalStyles;
