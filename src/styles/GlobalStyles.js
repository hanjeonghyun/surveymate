import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import PoppinsBoldWoff from '../assets/fonts/PoppinsBold.woff'
import PoppinsSemiBoldWoff from '../assets/fonts/PoppinsSemiBold.woff'
import PoppinsMediumWoff from '../assets/fonts/PoppinsMedium.woff'

const GlobalStyle = createGlobalStyle`
    ${reset};
    @font-face{
        font-family: "PoppinsBold";
        src: url(${PoppinsBoldWoff}) format("woff");
    }
    @font-face{
        font-family: "PoppinsSemiBold";
        src: url(${PoppinsSemiBoldWoff}) format("woff");
    }
    @font-face{
        font-family: "PoppinsMedium";
        src: url(${PoppinsMediumWoff}) format("woff");
    }
    
    body{
        margin: 0vw 5vw;
        font-family: PoppinsBold, sans-serif; 
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;