import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: 0 18rem;
    .slick-prev:before,
    .slick-next:before {
      content: '';
    }

    .slick-track {
      width: 20rem;
    }
    .slick-slide {
      div {
        margin: 0.5rem 3rem 0 0.1rem;
      }
      width: 20rem;
    }
    .slick-list {
      height: 600px !important;
    }

    .slick-prev {
      left: 95%;
      z-index: 10;
    }
    .slick-next {
      right: 1.5%;
    }
    .slick-prev,
    .slick-next {
      transition: ease-in-out 300ms;
      color: #a2a3a2;
      top: 95%;

      &:hover {
        color: ${theme.colors.secondaryColor};
      }
    }

    .body-card {
      transition: ease-in-out 300ms;
      box-shadow: 0 0 1rem #e4e7ed, 0 0 0 1px #e4e7ed;
      z-index: 1;

      img {
        width: 100%;
      }

      .hidde {
        margin: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        transition: ease-in-out 300ms;
        background-color: black;
        button {
          text-align: center;
          cursor: pointer;
          border: 2px solid transparent;
          padding: 1rem 2rem;
          background-color: #ef233c;
          color: #fff;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 4rem;
          transition: ease-in-out 100ms;
          display: none;
        }
      }
      &:hover {
        box-shadow: 0 0 0 0 #ef233c, 0 0 0 1px #ef233c;
        .hidde {
          box-shadow: 0 0 0 0 #ef233c, 0 0 0 1px #ef233c;
          padding: 2rem 0;
          button {
            display: block;
          }
        }
      }

      .description {
        width: 100%;
        text-align: center;

        span {
          text-transform: uppercase;
          font-size: 12px;
          color: #8d99ae;
        }
      }

      .category {
        width: 100%;
        text-align: center;
        h3 {
          overflow: hidden;
          text-overflow: ellipsis;
          height: 2rem;
          color: #2b2d42;
          font-size: 700;
          font-size: 1.5rem;
        }
      }

      .price {
        width: 100%;
        text-align: center;
        h4 {
          display: flex;
          flex-direction: column;
          color: #d10024;
          font-size: 18px;
          padding: 0;
          del {
            font-size: 70%;
            font-weight: 400;
            color: #8d99ae;
          }
        }
      }

      .icons {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        padding: ${theme.spacings.small};
        border-top: 2px solid #e6e5e3;
        margin: 1.5rem 1rem 0;

        button {
          padding: 1rem;
          background-color: transparent;
          border: none;
          transition: ease-in-out 300ms;
          cursor: pointer;
          svg {
          }
          &:hover {
            border-radius: 100%;
            background-color: #e6e5e3;
            color: ${theme.colors.secondaryColor};
          }
        }
      }
    }
  `}
`;
