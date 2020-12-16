import { createGlobalStyle } from 'styled-components';

import { fontFamily, fontSize } from 'config/variablesConfig';

export const GlobalStyles = createGlobalStyle`
    html, body, #root {
        height: 100%
    }
    body {
        margin: 0;
        font-family: ${fontFamily.primary};
        font-size: ${fontSize.normal}
    }
`;
