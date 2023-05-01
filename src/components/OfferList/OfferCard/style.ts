import styled from 'styled-components';

export const StyledOfferCard = styled.li`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4.25rem;
  width: 100%;
  border-bottom: 1px solid #000000;
  padding: 0.5rem 0;

  div {
    display: flex;
    gap: 1rem;
    width: 100%;

    img {
      object-fit: cover;
      width: 3.625rem;
      height: 3.625rem;
      background-color: #f1ede7;
      border-radius: 0.125rem;
      border: 1px solid red;
    }

    section {
      display: flex;
      flex-direction: column;

      div:nth-child(1) {
        display: flex;
        gap: 1rem;
        width: 100%;
        justify-content: space-between;

        span {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          h4,
          small,
          p {
            font-size: 0.875rem;
            font-weight: 600;
            color: #2e2e2e;
          }
        }
      }

      div:nth-child(2) {
        display: flex;
        justify-content: space-between;

        span {
          display: flex;
          padding: 0;
          font-size: 12px;
          font-weight: 400;
          color: #a098ae;
        }
        div {
          display: flex;
          width: 50%;

          button {
            display: flex;
            align-items: center;
            border: none;
            padding: 0;
            background: transparent;
            width: 0.3125rem;
            height: 0.875rem;

            img {
              width: 0.875rem;
              height: 0.875rem;
            }
          }
        }
      }
    }
  }
`;

export const StyledOfferCardContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    width: 3.625rem;
    height: 3.625rem;
    background-color: #f1ede7;
    border-radius: 0.125rem;
    border: 1px solid red;
  }

  section {
    display: flex;
    flex-direction: column;

    div:nth-child(1) {
      display: flex;
      gap: 1rem;
      width: 100%;
      justify-content: space-between;

      h4,
      small,
      p {
        font-size: 0.875rem;
        font-weight: 600;
        color: #2e2e2e;
      }
    }

    div:nth-child(2) {
      display: flex;
      gap: 0;

      p {
        display: flex;
        padding: 0;
        font-size: 12px;
        font-weight: 400;
      }
      div {
        display: flex;
        width: 50%;

        button {
          display: flex;
          align-items: center;
          border: none;
          // padding: 0;
          background: transparent;
          width: 0.3125rem;
          height: 0.875rem;

          img {
            width: 0.875rem;
            height: 0.875rem;
          }
        }
      }
    }
  }
`;
