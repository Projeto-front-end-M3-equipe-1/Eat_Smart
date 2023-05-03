import styled from 'styled-components';

export const StyledProductList = styled.ul`
  display: flex;
  gap: 2.25rem;
  overflow-x: auto;
  list-style: none;
  padding-left: 0;

  @media (min-width: 375px) {
  }

  @media (min-width: 425px) {
  }

  @media (min-width: 768px) {
    margin-top: 1rem;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 100%;
  }

  @media (min-width: 1024px) {
  }
`;
