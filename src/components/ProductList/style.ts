import styled from 'styled-components';

export const StyledProductList = styled.ul`
  display: flex;
  overflow-x: auto;
  list-style: none;
  justify-content: flex-start;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 100%;
  }
`;
