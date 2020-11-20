import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    width : 100%;
    min-height: 100%;
    overflow-x: hidden;
    font-family: var(--font-segoe);
    font-size: var(--fz-xl);
    line-height: 1;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &.blur {
      overflow: hidden;

      .main {
        filter : brightness(0.3);
        pointer-events: none;
        user-select : none;
      }
    }
  }

  :root {
    --green : #00D63E;
    --green-shadow: rgba(35, 163, 41, 0.7)
    --brown : #1C2427,
    --pink : #AD8184,
    --semi-black : #22343F;
    --dirty-white : #A68585;
    --white : #FFFFFF;
    --blue : #4789FF;
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

    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  .line {
    text-decoration: none;
    position: absolute;

      &:after {
        margin: -35px 0 0;
        content: "";
        display: block;
        width: 100%;
        height: 50px;
        background-color: #5f98fc;
        transition: ease-in width 0.3s;
      }

  }

  .line-animation {
    text-decoration: none;
    color : var(--white);
    z-index : 10;

    &:after {
      margin: 6px 0;
      content: "";
      display: block;
      width: 0px;
      height: 1px;
      background-color: var(--white);
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

      @media (max-width: 768px){
          display: block
        }
    }

    #video {
        display : block;
        object-fit: cover;
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
      padding: 0 0 200px;

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
    position: relative;
    margin : 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 0 100px 90px;
    transition: var(--transition);

    @media (max-width: 1080px) {
      padding: 0 100px 90px;
    }

    @media (max-width: 768px) {
      padding: 0 10px 60px;
    }
  }
`;

export default GlobalStyled;
