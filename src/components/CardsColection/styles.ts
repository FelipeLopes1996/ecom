import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: 5rem 18rem;
  `}
`;

export const WrapperCards = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 30%;
    margin-bottom: 1rem;
  `}
`;
export const InfoCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 60%;
      background: #d10024;
      opacity: 0.9;
      transform: skewX(-35deg);
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 1px;
      width: 100%;
      background: #d10024;
      opacity: 0.9;
      transform: skewX(-35deg) translateX(-100%);
    }
  `}
`;

export const WrapperImage = styled.div`
  position: relative;
  background-color: #e4e7ed;
  z-index: -1;
  img {
    width: 100%;
    transition: ease-in-out 300ms;
    vertical-align: middle;
    &:hover {
      transform: scaleX(1.1);
      transform: scaleX(1.1) skewX(5deg);
    }
  }
`;
export const WrapperText = styled.div`
  position: absolute;
  top: 0;
  width: 75%;
  padding: 30px;
  z-index: 10;

  h3 {
    width: 60%;
    color: #fff;
    font-weight: 700;
    font-size: 2.5rem;
    margin: 0 0 10px;
  }

  span {
    cursor: pointer;
    display: flex;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    svg {
      margin-left: 1rem;
      transition: ease-in-out 300ms;
    }

    &:hover {
      svg {
        margin-left: 2rem;
      }
    }
  }
`;
