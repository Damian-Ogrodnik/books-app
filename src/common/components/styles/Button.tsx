import styled from 'styled-components';

import { colors } from 'config/variablesConfig';

export const Button = styled.button`
  cursor: pointer;
  display: block;
  background-color: ${colors.lightOrange};
  color: ${colors.white};
  border: 3px solid ${colors.lightOrange};
  border-radius: 10px;
  text-transform: uppercase;
  padding: 0.5rem;
`;
