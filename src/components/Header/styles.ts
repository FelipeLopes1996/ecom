import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 4.6rem 18rem 3rem;
    background-color: ${theme.colors.newBlack};
  `}
`;

export const WrapperLogo = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    margin-right: 9rem;
    display: flex;

    h1 {
      color: ${theme.colors.white};
      margin: 0.4rem;
      transition: ease-in-out 300ms;
    }

    svg {
      color: ${theme.colors.white};
      transition: ease-in-out 300ms;
    }
    &:hover {
      svg {
        color: #d10050;
      }
      h1 {
        color: #d10050;
      }
    }
  `}
`;

export const WrapperSearch = styled.div`
  ${({ theme }) => css`
    margin-right: 15rem;
    form {
      select {
        cursor: pointer;
        border-radius: 5rem 0 0 5rem;
        padding: 1rem 2rem;
        font-weight: 500;
        transition: ease-in-out 300ms;

        &:focus {
          border: 0.1rem solid #d10024;
        }
      }
      input {
        padding: 1rem 2rem;
        font-weight: 500;
        width: 30rem;
        outline: none;
        transition: ease-in-out 300ms;

        &:focus {
          border: 0.2rem solid #d10024;
        }
      }
      button {
        cursor: pointer;
        color: #fff;
        background: #d10024;
        border-radius: 0 5rem 5rem 0;
        padding: 1.2rem 2rem;
        font-weight: 700;
        border: none;
        transition: ease-in-out 300ms;

        &:hover {
          background: #d10050;
        }
      }
    }
  `}
`;

export const BntFavorites = styled.button`
  ${({ theme }) => css`
    margin-right: 7rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    color: #fff;
    background-color: ${theme.colors.newBlack};
    transition: ease-in-out 300ms;
    &:hover {
      color: #d10050;
    }

    span {
      position: relative;
      left: 1.7rem;
      bottom: 5rem;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      font-size: 10px;
      color: #fff;
      background-color: #d10024;
    }

    svg {
      margin-bottom: 0.2rem;
    }
  `}
`;

export const BntCart = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    color: #fff;
    background-color: ${theme.colors.newBlack};
    transition: ease-in-out 300ms;
    &:hover {
      color: #d10050;
    }
    span {
      position: relative;
      left: 1.7rem;
      bottom: 5rem;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      font-size: 10px;
      color: #fff;
      background-color: #d10024;
    }

    svg {
      margin-bottom: 0.2rem;
    }
  `}
`;
