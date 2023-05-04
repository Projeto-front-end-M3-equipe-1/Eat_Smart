import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  justify-content: space-around;
  overflow-x: auto;
  list-style: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 100%;
  }
`;
