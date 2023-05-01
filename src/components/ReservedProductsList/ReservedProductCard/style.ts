import styled from 'styled-components';

export const StyledReserveCard = styled.li`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #000000;

  div:nth-child(1) {
    border: 1px solid red;
    display: flex;

    img {
      width: 3.625rem;
      height: 3.625rem;
      object-fit: cover;
    }
  }

  div:nth-child(2) {
    border: 1px solid red;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    
    div {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
      border: 1px solid red;

      p {
        font-size: 0.875rem;
        font-weight: 600;
        color: #2e2e2e;
        margin: 0;
      }

      img {
        width: 1.25rem;
        height: 1.25rem;
        object-fit: cover;
      }
    }

    span {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      height: 1.375rem;

      p {
        color: #056365;
        font-size: 0.875rem;
        font-weight: 600;
      }

      small {
        font-size: 0.875rem;
        font-weight: 600;
        color: #000000;
      }
    }
  }
`;
