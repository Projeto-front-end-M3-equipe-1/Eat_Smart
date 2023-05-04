import styled from 'styled-components';

export const StyledCommerceDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #efe9e8;
  font-family: 'Poppins';
  margin: 0 auto;
  /* position: absolute */
  overflow-x: hidden;
`;

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  // display: none;
`;

export const StyledCommerceDataContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  margin-top: 1rem;
`;

export const StyledCommerceLogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
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
    color: rgb(5, 99, 101);
    height: 100%;
    display: flex;
    align-items: center;
    line-height: 36px;
  }

  @media (min-width: 768px) {
    width: 90%;
  }
`;

export const StyledCommerceDashboardMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  width: 90%;
  height: 70%;

  section {
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
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
    align-items: flex-start;
    width: 80vw;
    height: 76vh;

    section {
      width: 39.5vw;
    }
  }
`;

export const StyledMainSections = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-content: space-between;
  }
`;

export const StyledFooterCommerce = styled.div`
  width: 100%;
  height: 15%;
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
