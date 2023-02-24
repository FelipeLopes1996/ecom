import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem 0 1rem 16.5rem;
  border-bottom: 2px solid #e4e7ed;
  .active {
    a {
      color: #d10050;
      &:after {
        width: 100%;
      }
    }
  }
`;

export const Li = styled.li`
  ${({ theme }) => css`
    list-style: none;
    padding: ${theme.spacings.small};

    a {
      color: ${theme.colors.primaryColor};
      transition: ease-in-out 200ms;
      text-decoration: none;
      border: none;
      outline: none;
      border-bottom: 0 solid ${theme.colors.secondaryColor};
      transition: ease-in-out 300ms;

      &:hover {
        color: ${theme.colors.secondaryColor};
      }
      &:after {
        content: '';
        display: block;
        width: 0%;
        height: 2px;
        background-color: #d10024;
        transition: ease-in-out 300ms;
      }
      &:hover::after {
        width: 100%;
      }
    }
  `}
`;
