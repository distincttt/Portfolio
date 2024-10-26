import { createGlobalStyle } from 'styled-components'

import { H2, ImgBox, Section, TabBox } from './constant/style'
import { ResumeContainer } from './components/Resume/ResumeStyle'
import { PortfolioContainer } from './components/Portfolio/PortfolioStyle'
import { NavbarWrapper } from './components/Navbar/NavbarStyle'
import { BtnSciWrapper, H1, HomeContainer, HomeInfo, SciWrapper } from './components/Home/HomeStyle'
import { AboutContainer, AboutInfo } from './components/About/AboutStyle'

export const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family: "Poppins", sans-serif;
}

:root {
    --nav-bg-color: rgba(255, 255, 255, .1);
    --bg-color: rgba(0, 20, 0, 1);
    --second-bg-color: rgba(0, 25, 0, 1);
    --third-bg-color: #2F4F4F;
    --main-color: #00FF7F;
    --white-color: #fff;
    --tab-list-color: #5F9EA0;
}

::selection {
    background: var(--main-color);
    color: var(--bg-color);
}

::-webkit-scrollbar {
    width: .5rem;
}

::-webkit-scrollbar-thumb {
    background: var(--main-color);
    border-radius: 1rem;
}

::placeholder {
    color: var(--white-color);
}

html {
    font-size:62.5%
}

body {
    color:var(--white-color);
    overflow:hidden;
}

p{
    font-size:1.6rem;
}

@media screen and (max-width: 1200px) {
    html{
        font-size:55%;
    }
}

@media screen and (max-width: 992px) {
    ${Section}{
        padding:0 4%;
    }

    ${ResumeContainer}, ${PortfolioContainer} {
    padding-top: 1.5rem;
    padding-bottom:27rem;
    }
}

@media screen and (max-width: 768px) {
    html{
        font-size:50%;
    }

    ${NavbarWrapper} {
    bottom:0;
    }

    ${HomeContainer}, ${AboutContainer}{
        flex-direction: column-reverse;
        justify-content: center;
        gap: 2rem;
        padding-bottom: 6rem;
    }

    ${AboutContainer}{
        flex-direction:column;
    }

    ${ImgBox}{
        width:30rem;
        height:30rem;
    }

    ${ResumeContainer}, ${PortfolioContainer} {
    padding-bottom:25rem;
    }
}

@media screen and (max-width: 600px) {
    ${TabBox}{
        margin-top:0;
    }

    ${ResumeContainer}, ${PortfolioContainer} {
    padding-top:1rem;
    padding-bottom:25rem;
    }
}

@media screen and (max-width: 400px) {
    ${NavbarWrapper}{
        width:100%;
        border-radius:0;
    }

    ${HomeInfo}, ${AboutInfo} {
    text-align: center;
    }

    ${H1} {
        font-size:5rem;
    }

    ${BtnSciWrapper} {
        flex-direction:column;
    }

    ${SciWrapper} {
        margin: 2rem 0;
    }

    ${ImgBox}{
        width:20rem;
        height:20rem;
    }

    ${H2}{
        text-align:center
    }
}

@keyframes animate-cube {
    0% {
        transform: scale(0) rotateY(-360deg)
    }
    100% {
        transform: scale(1) rotateY(0deg)
    }
}

@keyframes animate-nav {
    0% {
        visibility: hidden;
        opacity:0;
    }
    100% {
        visibility: visible;
        opacity:1;
    }
}
`
