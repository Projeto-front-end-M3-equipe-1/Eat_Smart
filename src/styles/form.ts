import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-family: ${({ theme }) => theme.fonts.primaryPoppins};
    font-size: 0.85rem;
    color: red;
  }
`;

export const StyledInputContainerLight = styled.div`
  width: 100%;
  height: 2.81rem;
  position: relative;

  display: flex;
  flex-direction: column;

  border: 2px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 0.25rem;

  font-family: ${({ theme }) => theme.fonts.primaryPoppins};

  input {
    border-radius: 0.25rem;
    height: 100%;
    width: 100%;
    font-size: 0.875rem;
    padding: 0.9375rem;
    color: ${({ theme }) => theme.colors.gray600};
  }

  label {
    background-color: ${({ theme }) => theme.colors.white};
    height: 100%;
    position: absolute;
    top: 0px;
    left: 12px;

    display: flex;
    align-items: center;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray600};
    transition: top 0.5s, left 0.3s ease-out;
  }

  input:is(:focus, :not(:placeholder-shown)) + label {
    top: -10px;
    left: 12px;

    height: fit-content;
    width: fit-content;

    padding: 0.1875rem 0.625rem;
    border-radius: 14px;

    color: ${({ theme }) => theme.colors.gray600};
    font-size: 1rem;
  }
`;
export const StyledInputContainerDark = styled.div`
  width: 100%;
  height: 2.81rem;
  position: relative;

  display: flex;
  flex-direction: column;

  border: 2px solid ${({ theme }) => theme.colors.greenSecondary};
  border-radius: 0.25rem;

  font-family: ${({ theme }) => theme.fonts.primaryPoppins};

  input {
    border-radius: 0.25rem;
    height: 100%;
    width: 100%;
    font-size: 0.875rem;
    padding: 0.9375rem;
    color: ${({ theme }) => theme.colors.white};
  }

  label {
    /* background-color: ${({ theme }) => theme.colors.white}; */
    height: 100%;
    position: absolute;
    top: 0px;
    left: 12px;

    display: flex;
    align-items: center;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    transition: top 0.5s, left 0.3s ease-out;
  }

  input:is(:focus, :not(:placeholder-shown)) + label {
    top: -10px;
    left: 12px;

    height: fit-content;
    width: fit-content;

    padding: 0.1875rem 0.625rem;
    border-radius: 14px;

    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
  }
`;
