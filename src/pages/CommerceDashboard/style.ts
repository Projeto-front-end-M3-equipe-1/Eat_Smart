import styled from 'styled-components';

export const StyledCommerceDashboard = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  background-color: #efe9e8;
  font-family: 'Poppins';
  overflow-x: hidden;
`;

export const StyledCommerceDataContainer = styled.div`
  border: 1px solid red;
  display: flex;
  width: 90%;
  justify-content: center;
  margin-top: 1rem;
`;

export const StyledCommerceLogoContainer = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  margin-left: 1rem;

  img {
    width: 2.125rem;
    height: 2.125rem;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #056365;
  }
`;

export const StyledCommerceDashboardMainContainer = styled.main`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 90%;

  section {
    display: flex;
    flex-direction: column;
    width: 90%;

    h2 {
      border: 1px solid red;
      display: flex;
      align-items: center;
      height: 3.0625rem;
      padding-left: 1rem;
      border-radius: 0.75rem;
      background-color: #ffffff;
      border: 2px solid #056365;
      color: #2e2e2e;
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 2.0625rem;
    }
  }
`;
