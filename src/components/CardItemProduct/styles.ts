import styled, { css } from 'styled-components';
type cartHead = {
  isCart: boolean;
};

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem 4rem;
    background-color: #f0f2f1;
    box-shadow: 0 0 1rem #e4e7ed, 0 0 0 1px #e4e7ed;
    border-radius: 8px;
  `}
`;

export const HeadCart = styled.div<cartHead>`
  ${({ theme, isCart }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.large} ${theme.spacings.large}
      ${isCart ? 0 : null};

    .info-head {
      display: flex;
      svg {
        color: ${theme.colors.newBlack};
      }
      h1 {
        padding-left: ${theme.spacings.small};
        color: ${theme.colors.newBlack};
        font-size: ${theme.font.sizes.medium};
      }
    }

    span {
      font-weight: 600;
    }
  `}
`;

export const cardBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.large};
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.white};
    border-radius: 6px;

    img {
      width: 20%;
      background-color: red;
    }

    .price {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 0 0 6rem;

      del {
        font-size: ${theme.font.sizes.medium};
        margin: ${theme.spacings.medium} 0 0 0;
        color: #6c757d;
        font-weight: 600;
      }
      span {
        font-size: ${theme.font.sizes.large};
        color: #28a745;
        font-weight: 600;
      }
    }

    .btn-add-cart {
      cursor: pointer;
      border: none;
      margin-top: 4rem;
      padding: ${theme.spacings.small};
      color: ${theme.colors.white};
      font-weight: 600;
      border-radius: 8px;
      background-color: #5cb85c;
      transition: ease-in-out 400ms;

      & :hover {
        background-color: #28a745;
      }
    }
  `}
`;
export const WrapperDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 40rem;
    margin: 0 3rem;

    span {
      margin-bottom: 0.8rem;
    }
    h2 {
      font-size: ${theme.font.sizes.small};
      line-height: 2.5rem;
    }
  `}
`;

export const ButtonDestroyer = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    border: none;
    height: -webkit-fill-available;
    margin: 1rem 0 0 13rem;
    svg {
      transition: ease-in-out 300ms;
      &:hover {
        color: #dc3545;
      }
    }
  `}
`;
export const WrapperQuantity = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: 3rem;

    span {
      margin: 0;
      color: red;
      margin-right: 1rem;
      font-weight: 550;
      color: ${theme.colors.newBlack};
    }

    button {
      cursor: pointer;
      border: none;
      padding: 1rem 1.5rem;
      margin-right: 1rem;
      border-radius: 4px;
      font-size: 2rem;
      border: 1px solid transparent;
      transition: ease-in-out 400ms;

      &:hover {
        border: 1px solid ${theme.colors.newBlack};
      }
    }
  `}
`;
