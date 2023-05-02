import styled from 'styled-components';

export const StyledEditOfferModal = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
width: 100%;
height: 100vh;
// position: fixed;
z-index: 1001;
top: 0;
right: 0;

// background-color: #ffffff;
// background: rgba(51, 51, 51, 0.5);
// box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

section {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 22.5rem;
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
  color: #FFFFFF;
  justify-content: center;
  align-items: center;
}

section > form {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 1.5rem;
  background-color: #ffffff;
}

section > form > h3 {
  padding-left: 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  width: 100%;
  margin-bottom: 0;
}

section> form > div{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  background: transparent;
}

section> form > div> label {
  background-color: ${({ theme }) => theme.colors.white};
  height: 2px;
  position: absolute;
  padding: 3px;
  top: -0.3125rem;
  left: 1.25rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: #000000;
  transition: top 0.5s, left 0.3s ease-out;
}

section> form > div > input{
        height: 45px;

        font-size: 14px;
        border: 1px solid ${({ theme }) => theme.colors.gray300};
        color: #989898;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 0.5rem;
        padding: 0;

        ::placeholder {
          height: 45px;
          color: ${({ theme }) => theme.colors.gray150};
          padding-left: 14px;
        }

        :focus{
          color: #000000;
          padding-left: 14px;
        }
      }
}

section> form > div > p{
  height: 1rem;
  margin: 0;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.greenPrimary}
}

section> form > button {
  border: 1px solid red;
  width: 90%;
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
  margin: 1rem 0 !important;

}
section > button {
  width: 90%;
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
