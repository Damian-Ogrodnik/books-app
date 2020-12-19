import styled from 'styled-components';

import { fontSize } from 'config/variablesConfig';

export const BooksContainerWrapper = styled.div`
  position: relative;
  min-height: 100%;
`;

export const Information = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${fontSize.big};
`;
