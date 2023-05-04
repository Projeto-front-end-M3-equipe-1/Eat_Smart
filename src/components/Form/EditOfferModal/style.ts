import styled from "styled-components";

export const StyledEditOfferModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 99vw;
  height: 100vh;
  position: absolute;
  z-index: 1000;
  inset: 0;
  left: 0;

  background: rgba(51, 51, 51, 0.5);
  box-shadow: 0px 9px 2px rgba(0, 0, 0, 0.25);

  section {
    display: flex;
    flex-direction: column;
    width: 19.375rem !important;
    background-color: #ffffff;
    border-radius: 1.5rem 0rem 0 1.5rem;
    padding: 0 1rem;
  }

  section > nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2.5rem;
    background-color: #ffffff;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  section > nav > button {
    background-color: ${({ theme }) => theme.colors.orangePrimary} !important;
    border: 1px solid ${({ theme }) => theme.colors.orangePrimary} !important;
    border-radius: 6px;
    width: 1.75rem;
    height: 1.625rem;
    color: #ffffff;
    justify-content: center;
    align-items: center;
  }

  section > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    background-color: #ffffff;
  }

  section > form > h3 {
    margin-bottom: 0 !important;
    margin-top: 0.5rem !important;
    padding-left: 1rem;
    font-size: 1.125rem;
    font-weight: 600;
    width: 100%;
  }

  section > form > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    background: transparent;
  }

  section > form > div > label {
    background-color: ${({ theme }) => theme.colors.white};
    height: 8px;
    position: absolute;
    padding: 3px;
    top: -0.3125rem;
    left: 1rem;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: #000000;
    transition: top 0.5s, left 0.3s ease-out;
  }

  section > form > div > input {
    height: 45px;
    width: 90%;

    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    color: #989898;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    padding: 0 0 0 14px;

    ::placeholder {
      height: 45px;
      color: ${({ theme }) => theme.colors.gray150};
    }

    :focus {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.gray300};
      color: #000000;
      padding-left: 14px;
    }
  }

  section > form > div > p {
    height: 1rem;
    margin: 0;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.greenPrimary};
  }

  section > form > button {
    width: 95%;
    height: 45px;
    background-color: #056365 !important;
    border: 1px solid #056365 !important;
    border-radius: 0.9rem;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0 0 1rem 0 !important;
  }
  section > button {
    width: 95%;
    height: 45px;
    align-self: center;
    margin-bottom: 2rem !important;

    background-color: #71cb9f !important;
    border: 1px solid #71cb9f !important;
    border-radius: 0.9rem;
    color: #056365;
    font-size: 0.875rem;
    font-weight: 600;
    justify-content: center;
    align-items: center;
  }
`;
