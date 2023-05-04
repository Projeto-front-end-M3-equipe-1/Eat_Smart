import styled from 'styled-components';

export const StyledProductList = styled.ul`
  display: flex;
  overflow-x: auto;
  list-style: none;
<<<<<<< HEAD
  justify-content: flex-start;
=======
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
>>>>>>> 159cac2495f4c3724c8a94626e5d8385f07c95e7

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 100%;
  }
`;
