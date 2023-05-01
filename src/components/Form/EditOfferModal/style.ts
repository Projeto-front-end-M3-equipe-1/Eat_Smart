import styled from 'styled-components';

export const StyledEditOfferModal = styled.div`
  backdrop-filter: blur(0.5px);
  box-shadow: 0px 9px 2px rgba(0, 0, 0, 0.25);
  position: absolute;
  inset: 0;
  z-index: 1000;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: auto !important;

    form {
      border: 2px solid #056365;
      display: flex;
      flex-direction: column;
      width: 60vw;
      height: 60vh;
      max-width: 700px;
      background: #ffffff;
      padding: 0 1rem;
      gap: 1rem;
      border-radius: 1rem;

      div {
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.5rem;

          input,
          label {
            align-self: flex-start;
            font-size:0.875rem;

          }

          label{

          }
          input {
            line-height: 2.8125rem;
            width: 59vw;
            max-width: 43rem;
            border-radius: 0.25rem;
            border: 1px solid #989898;

            ::placeholder{
              padding-left: 1rem;
            }
          }
        }
      }

      button {
        background: #056365 !important;
        height: 3.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:1.25rem;
      }
    }
    footer {
      margin-top: -13vh;
      button {
        background: #71CB97 !important;
        height: 3.75rem;
        width: 60vw;
        max-width: 43rem;
        border-radius: 1.25rem;
      }
    }
  }
`;
