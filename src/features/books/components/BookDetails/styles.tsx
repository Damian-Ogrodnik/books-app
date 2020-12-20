import styled from 'styled-components';
import _Modal from 'react-modal';

import { Button } from 'common/components/styles';
import { colors, fontSize } from 'config/variablesConfig';
import { mediaQueriesHelper } from 'common/helpers/mediaQueriesHelper';

export const Modal = styled(_Modal)`
  padding: 2rem;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 80%;
  max-height: 90vh;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.lightGray};
  outline: none;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1.2rem rgba(0, 0, 0, 0.35);
  overflow: auto;

  ${mediaQueriesHelper.medium} {
    width: 95%;
  }

  ${mediaQueriesHelper.small} {
    padding: 1rem;
  }
`;

export const BasicInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

  ${mediaQueriesHelper.medium} {
    flex-direction: column;
    align-items: center;
  }
`;

export const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  right: 2rem;

  ${mediaQueriesHelper.small} {
    right: 1rem;
  }
`;

export const BuyLink = styled.a`
  cursor: pointer;
  display: block;
  background-color: ${colors.lightOrange};
  color: ${colors.white};
  border: 3px solid ${colors.lightOrange};
  border-radius: 10px;
  text-transform: uppercase;
  padding: 0.5rem;
  text-align: center;
  width: 10rem;
  text-decoration: none;
  font-size: ${fontSize.small};
`;

export const Description = styled.p`
  width: 100%;
  text-align: justify;
`;

export const BookCover = styled.img`
  height: 15rem;
  width: 12rem;

  ${mediaQueriesHelper.small} {
    height: 17rem;
  }
`;

export const Title = styled.h3`
  margin: 0.25rem 2.5rem 0.25rem 0rem;
`;

export const DetailRow = styled.p`
  margin: 0.25rem 0rem;
`;
