import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family: "Roboto Mono", sans-serif;
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
    background-color:var(--third-bg-color);
    color:var(--white-color);
    overflow:hidden;
}

@media screen and (max-width: 1200px) {
    html{
        font-size:55%;
    }
}

@media screen and (max-width: 768px) {
    html{
        font-size:50%;
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

@keyframes animate-icon {
    0% {
        transform: rotateY(0deg)
    }
    100% {
        transform: rotateY(360deg)
    }
}
`
