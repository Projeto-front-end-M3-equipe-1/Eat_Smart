import styled from 'styled-components';

export const StyledProductList = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  height: 25rem;
  overflow-x: auto;
  list-style: none;
  justify-content: flex-start;
  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-track {
    background: #f5f5f5;
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
