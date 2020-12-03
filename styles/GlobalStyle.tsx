import { createGlobalStyle } from "styled-components";
import { dark, light } from "./Theme";

interface StyledTyped {
  isDark: any;
}

const GlobalStyled = createGlobalStyle<StyledTyped>`
  body {
    padding: 0;
    margin: 0;
    width : 100%; 
    min-height: 100%;
    overflow-x: hidden;
    font-family: var(--font-segoe);
    font-size: var(--fz-xl);
    line-height: 1;
    color: #22343f;
   
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &.dark {
      background: #181A1B;
      color: #CAC5BE;
      fill :  #CAC5BE;
    }

    /* &.blur {
      overflow: hidden;

      .main {
        filter : brightness(0.3);
        pointer-events: none;
        user-select : none;
      }
    } */
  }

  .line {
      width: 100%;
      height: 1px;
      border-bottom: 1px solid #e9e0e0;
      margin: 15px auto;
    }

  .dark {
    background: ${dark.background};
  }

  .light {
    background: ${light.background};
  }

  :root {
    --green : #00D63E;
    --green-shadow: rgba(35, 163, 41, 0.7);
    --brown : #1C2427;
    --pink : #AD8184;
    --semi-black : #22343F;
    --dirty-white : #A68585;
    --white : #FFFFFF;
    --semi-white : #FEF5F5;
    --blue : #4789FF;
    --red : #FF083D;
    --light-blue : #9bb6e4;
    --dark-blue :  rgba(73, 63, 104, 0.5);
    --green-tint: rgba(100, 255, 218, 0.1);

    --font-segoe : "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
    --font-sans: 'Calibre',  'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    //--font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 100px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --transform : translateY(-10px);

    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  .line-big {
    text-decoration: none;
    position: absolute;

      &:after {
        margin: -35px 0 0;
        content: "";
        display: block;
        width: 100%;
        height: 50px;
        background-color: var(--light-blue);
        transition: ease-in width 0.3s;
      }
  }


  .line-small {
    text-decoration: none;
    position: absolute;
    margin: 0 10px 0;
      &:after {
        margin: -10px 0 0;
        content: "";
        display: block;
        width: 100%;
        height: 10px;
        background-color: #5f98fc;
        transition: ease-in width 0.3s;
      }
  }


  .title-heading {
    margin: 20px 0;
    max-width: 650px;
    
    @media (max-width: 495px) {
      font-size: var(--fz-xl);
    }
  }

  .child-heading {
      font-weight: bold;
      font-size: var(--fz-sm);
      color: #3d5567;
  }

  .paragraph {
    max-width: 570px;
    line-height: 27px;
    font-size: clamp(15px, 5vw, var(--fz-xl));
    color: var(--dirty-white);

    @media (max-width: 768px) {
      line-height: 22px;
      font-size: clamp(15px, 5vw, var(--fz-lg));
    }

    @media (max-width: 495px) {
      font-size: clamp(15px, 5vw, var(--fz-sm));
    }
  }

  .line-animation {
    text-decoration: none;
    color : var(--white);
    position: absolute;

    &:after {
      margin: 6px 0;
      content: "";
      display: block;
      width: 0px;
      height: 2px;
      background-color: var(--semi-white);
      transition: width 0.3s;
    }

    &:hover::after{
        width: 100%;  
        transition : width .3s;
      }
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .background {
        background: url("/video/background.png") no-repeat;
        width: 100vw;
        height: 100vh;
        background-size: cover;
        display: none;
        filter: contrast(1.1);

      @media (max-width: 768px){
          display: block
        }
    }

    #video {
        display : block;
        object-fit: cover;
        filter: contrast(1);

        @media (min-aspect-ratio: 16/9) {
          width: 100%;
          height: auto;
        }

        @media (max-aspect-ratio: 16/9) {
          width: 100%;
          height: 100vh;
        }

        @media (max-width: 768px){
          display: none
        }
      }

    main {
      padding: 0 0 150px;


      @media (max-width: 1080px) {
        padding: 0 0 90px;
      }

      @media (max-width: 768px) {
        padding: 0 0 60px;
      }
      
      @media (max-width: 480px) {
        padding: 0 0 30px;
      }

    }

  section {
    margin : 0 auto;
    max-width: 1100px;
    padding: 0 0 170px;
    transition: var(--transition);

    @media (max-width: 1080px) {
      padding: 0 150px 90px;
    }

    @media (max-width: 768px) {
      padding: 0 25px 60px;
    }

    @media (max-width: 480px) {
      padding: 0 20px 25px;
    }
  }
  
  button {
    cursor: pointer;
    margin: 50px 0;
    background: transparent;
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition);
    border: solid 1px var(--white);
    color: var(--white);
    letter-spacing: 1px;
    padding: 15px 30px;

    &:hover,
    &:focus {
      background-color: var(--green-tint);
    }
  }

`;

export default GlobalStyled;
