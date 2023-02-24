import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 4.2rem 4rem;
    margin-right: 3rem;
    background-color: #f0f2f1;
    box-shadow: 0 0 1rem #e4e7ed, 0 0 0 1px #e4e7ed;
    border-radius: 8px;

    div {
      display: flex;
      align-items: center;
    }
  `}
`;
