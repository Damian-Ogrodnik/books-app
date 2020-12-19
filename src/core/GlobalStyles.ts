import { createGlobalStyle } from 'styled-components';

import { fontFamily, fontSize, colors } from 'config/variablesConfig';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        margin: 0;
        font-family: ${fontFamily.primary};
        font-size: ${fontSize.normal};
        background-color: ${colors.lightGray}
    }
`;
