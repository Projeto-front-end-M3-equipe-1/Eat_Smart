import styled from 'styled-components';

export const StyledReserveCard = styled.li`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #000000;

  img {
    width: 41px;
    height: 41px;
    object-fit: cover;
  }

  div:nth-of-type(1) {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      p,
      small {
        font-size: 0.875rem;
        font-weight: 600;
        color: #2e2e2e;
      }
    }

    img {
      width: 1.25rem;
      height: 1.25rem;
      object-fit: cover;
    }
  }
  div:nth-of-type(2) {
    display: flex;
    display: flex;
    align-items: center;
    gap: 2rem;

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
`;
