import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: gray;

  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 182px;
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    padding: 30px 0 10px 0;
  }

  section > img {
    width: 100px;
  }

  section > div {
    display: flex;
    justify-content: space-between;
  }

  section > div > img {
    cursor: pointer;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
  }

  div:last-child > p {
    margin: 2px;
    cursor: pointer;
  }

  .footerMiddle__container{
    width: 350px;
  }

  figure {
    display: flex;
    align-items: end;
    margin: 0;
  }
`;
