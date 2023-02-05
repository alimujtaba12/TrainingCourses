import styled, { keyframes, css } from 'styled-components';

const keyframesShimmer = keyframes`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`;

const shimmerAnimation = css`
  background: linear-gradient(
    to right,
    #E6E6E6 35%,
    #F2F2F2 50%,
    #E6E6E6 65%
  );
  background-size: 200% 100%;
  animation: ${keyframesShimmer} 1s infinite linear;
`;

export const LoadingBlock = styled.div`
  ${shimmerAnimation}
    margin: ${({ margin }) => margin};
    width:  ${({ width }) => width};
    height: ${({ height }) => height};
`;
