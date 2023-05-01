import styled from 'styled-components';

export const StyledEditOfferModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  // position: fixed;
  margin: auto;
  inset: 0;
  z-index: 1000;
  box-shadow: 0px 9px 2px rgba(0, 0, 0, 0.25);
  background: linear-gradient(270deg, #F8F9FA 0%, rgba(255, 255, 255, 0) 100%);
  position: absolute;

  form {
    border: 1px solid blue;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 21.875rem;
    height: 900px;
    border-radius: 24px 0px 0px 24px;

    nav {
      margin-top: 4rem;
      display: flex;
      justify-content: flex-end;
      gap: 1rem;

      img {
        height: 2.125rem;
        width: 2.4375rem;
        object-fit: cover;
      }
      button {
        display: flex;
        border: 1px solid black;
        width: 2.4375rem;
        height: 2.125rem;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }

    main {
      border: 1px solid red;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 90%;
      margin-left: 1rem;


      h3 {
        margin: 3rem 0 1rem 0;
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 1.5rem;
        color: #000000;
      }

      div> input{
        display: flex;
        flex-direction: column;
        width: 12.5rem;
      }

      button{
        background-color: #000000;
      }

  }
`;
