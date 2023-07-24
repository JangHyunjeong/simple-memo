import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import FontSize from "./FontSize";
import Colors from "./Colors";

const GlobalStyle = createGlobalStyle`
    ${reset};
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: ${FontSize.default};
        color: ${Colors.black};
    }

    a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
    }

    button, 
    input, 
    textarea, 
    select, 
    option {
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        border: 0;
    }
    button:focus, 
    input:focus, 
    textarea:focus, 
    select:focus{
        outline: none;
    }
    input::placeholder, 
    textarea::placeholder {
        color: ${Colors.grey} 
    }
    
    .visually-hidden {
        overflow: hidden;
        display: inline-block;
        position: absolute;
        z-index: -1;
        border: 0;
        width: 1px;
        height: 1px;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
    }
`;

export default GlobalStyle;
