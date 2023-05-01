import styled from 'styled-components';

export const StyledReserveContainer = styled.ul`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: #ffffff;
  border: 2px solid #056365;
  border-radius: 0.75rem;
  padding: 0 1rem;

  h3 {
    // border: 1px solid red;
    display: flex;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 2.0625rem;
    color: #2e2e2e;
    border-bottom: 1px solid #000000;
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) {
    margin-top: 1rem;
  }
`;
