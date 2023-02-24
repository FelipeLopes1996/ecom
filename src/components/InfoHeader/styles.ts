import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    background-color: #1e1f29;
  `}
`;

export const WrapperContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0rem 18rem;
    background-color: #1e1f29;

    ul {
      margin: 0;
      padding: ${theme.spacings.small} 0;
      display: flex;
      list-style: none;

      li {
        cursor: pointer;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        color: ${theme.colors.white};
        margin-right: 2rem;
        transition: ease-in-out 300ms;
        font-weight: 600;
        svg {
          color: red;
          margin-right: 0.3rem;
        }
        & :hover {
          color: red;
        }
      }
    }
  `}
`;
