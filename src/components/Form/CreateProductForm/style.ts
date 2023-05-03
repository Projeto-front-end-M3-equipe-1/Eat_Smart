import styled from 'styled-components';

export const StyledCreateProductForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.greenPrimary};
  border-radius: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;

  header,
  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;

    h1 {
      display: flex;
      font-size: 1.125rem;
      font-weight: 600;
      color: #2e2e2e;
    }

    div {
      width: 100%;
      flex-direction: column;
    }

    input {
      width: auto;
      border: 2px solid #989898;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 1rem;
      color: ${({ theme }) => theme.colors.gray600};
      font-size: 0.875rem;
      font-weight: 400;
    }

    label {
      font-size: 0.875rem;
      line-height: 1.3125rem;
      color: #989898 !important;
      background-color: transparent !important;
    }

    h2 {
      height: 1rem;
      margin: 0rem;
      font-size: 0.625rem;
      border: transparent;
      color: rgb(5, 99, 101);
      font-weight: 500;
      border-radius: 0;
    }
  }

  button {
    height: 2.8125rem;
    width: 90%;
    border: 1px solid ${({ theme }) => theme.colors.backgroundDark};
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    width: 95%;
    margin-top: 1rem;
  }
`;
