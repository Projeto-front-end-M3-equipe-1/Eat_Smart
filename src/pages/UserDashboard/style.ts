import styled from 'styled-components';

export const StyledContainerUserDashboard = styled.div`
  
  /* border: 1px solid red; */
  width: 99vw;
  height: 100vh;
  font-family: 'Poppins';
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BackgroundLight};
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;

  header {
    border: 1px solid red;
    width: 90%;
  }

  footer {
    border: 1px solid red;
    width: 100%;
  }

  @media (min-width: 768px) {
    header {
      width: 80%;
      height: 10%;
    }

    footer {
      height: 10%;
    }
  }
`;

export const StyledMainContainerUserDashboard = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 80%;
    height: 80%;
  }
`;
