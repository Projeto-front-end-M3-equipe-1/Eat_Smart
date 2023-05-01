import styled from 'styled-components';

export const StyledOffersContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  border: 2px solid #056365;
  border-radius: 1rem;
  margin-top: 1rem;

  h1 {
    // border: 1px solid red;
    display: flex;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 2.0625rem;
    color: #2e2e2e;
    margin: 1rem 0rem 0rem 1rem;
    padding-bottom: 1rem; 
    width: 90%;
    border-bottom: 1px solid #000000;
  }

  ul {
    list-style: none;
    margin-top: 0;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  span {
    // border: 1px solid red;
    height: 2rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;

    p,
    small {
      font-size: 1rem;
      font-weight: 500;
      color: #2e2e2e;
    }
  }

  button {
    height: 2.8125rem;
    border: 1px solid #056365;
    background-color: #056365;
    margin-bottom: 1rem;
    border-radius: 1rem;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
    margin: 0.5rem 1rem 1rem 1rem;
  }

  @media (min-width: 768px) {
    width: 95%;

    ul{
      height: 490px;
    }

    button{
      margin-top: 1rem;
    }
  }
`;
