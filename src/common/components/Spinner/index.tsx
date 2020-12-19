import styled from 'styled-components';

import spinner from 'assets/images/spinner.svg';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  padding-top: 10rem;
  padding-bottom: 5rem;
`;

const SpinnerImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  -webkit-animation: spin 2s linear infinite;
  -moz-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Spinner: React.FC = () => (
  <SpinnerWrapper>
    <SpinnerImg src={spinner} />
  </SpinnerWrapper>
);
