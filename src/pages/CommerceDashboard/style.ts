import styled from 'styled-components';

export const StyledCommerceDashboard = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #efe9e8;
  font-family: 'Poppins';
  overflow-x: hidden;
`;

export const StyledHeaderContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 10vh;
  display: flex;
  display: none;
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

  @media (min-width: 768px) {
    width: 90%;
  }
`;

export const StyledCommerceDashboardMainContainer = styled.main`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 90%;
  // height: 70vh;

  section {
    display: flex;
    flex-direction: column;
    width: 100%;

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

  @media (min-width: 768px) {
    width: 80%;
    height: 76.8vh;
    flex-wrap: wrap;
    gap: 1rem;

    section {
      width: 50%;
    }
  }
`;

export const StyledFooterCommerce = styled.div`
  width: 100%;
  margin-top: 1rem;

  footer {
    display: none;
  }

  div {
    display: flex;
  }

  @media (min-width: 768px) {
    div {
      display: none;
    }

    footer {
      display: flex;
      background-color: #056365;
      gap: 1rem;
    }
  }
`;
