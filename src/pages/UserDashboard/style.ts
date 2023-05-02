import styled from 'styled-components';

export const StyledContainerUserDasdhboard = styled.div`
  border: 1px solid red;
  width: 99vw;
  font-family: 'Poppins';
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BackgroundLight};
  align-items: center;
  overflow-y: hidden;

  header {
    border: 1px solid red;
    width: 90%;
  }

  footer {
    border: 1px solid red;
    width: 90%;
  }
`;

export const StyledMainContainerUserDashboard = styled.div`
  border: 1px solid red;
  width: 90%;
  display: flex;
  flex-direction: column;
`;
