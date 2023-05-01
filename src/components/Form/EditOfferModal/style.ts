import styled from 'styled-components';

export const StyledEditOfferModal = styled.div`
  // display: flex;
  // flex-direction: column;
  // background-color: #ffffff;
  // align-items: flex-end;
  // width: 100%;
  // margin: 0 auto;
  // background-color: rgba(0, 0, 0, 0);
  // backdrop-filter: blur(0.5px);
  // box-shadow: 0px 9px 2px rgba(0, 0, 0, 0.25);
  // justify-content: center;
  // alignItems: center;
  //width: 100%;

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
      height: 80vh;
      max-width: 700px;
      background: #ffffff;
      padding: 0 1rem;
      gap: 2rem;
      border-radius: 1rem;

      div {
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;

          input,
          label {
            align-self: flex-start;
          }
          input {
            line-height: 45px;
            width: 59vw;
            max-width: 688px;
          }
        }
      }

      button {
        background: #056365 !important;
        height: 60px;
      }
    }
    footer{
      margin-top: -13vh;
    button {
      background: #056365 !important;
      height: 60px;
      width:60vw;
      max-width: 688px;
    }
  }
   
  }
`;
