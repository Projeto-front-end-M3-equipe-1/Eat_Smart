import styled from 'styled-components';

export const StyledProductList = styled.ul`
  display: flex;
  overflow-x: auto;
  list-style: none;
  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-track {
    background: #F5F5F5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #056365;
    border-radius: 20px;
    border: 3px solid #056365;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 100%;
  }
`;
