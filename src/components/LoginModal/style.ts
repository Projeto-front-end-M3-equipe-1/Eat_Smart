import styled from 'styled-components';
import { AnimationFadeIn } from '../../styles/animations';

export const StyledCartModalBox = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 60px;
  width: 100%;
  height: 100vh;
  z-index: 1001;

  div {
    animation: ${AnimationFadeIn} 1s ease 0s 1 alternate backwards;
    width: 100%;
    margin-top: 200px;
    max-width: 500px;
    background-color: #f1ede7;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    align-items: center;
    padding: 1rem;

    h2 {
      color: ${({ theme }) => theme.colors.white};
    }
    button {
      margin: 10px;
    }
  }

  @media (max-width: 375px) {
    span {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 1rem;
    }
  }
`;

export const StyledCartModalBoxProfile = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 60px;
  width: 100%;
  height: 100vh;
  z-index: 1001;

  div {
    animation: ${AnimationFadeIn} 1s ease 0s 1 alternate backwards;
    width: 100%;
    margin-top: 200px;
    max-width: 500px;
    background-color: #f1ede7;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    align-items: center;
    padding: 1rem;

    h2 {
      color: ${({ theme }) => theme.colors.white};
    }
    button {
      margin: 10px;
    }
  }

  @media (max-width: 375px) {
    span {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 1rem;
    }
  }
`;
