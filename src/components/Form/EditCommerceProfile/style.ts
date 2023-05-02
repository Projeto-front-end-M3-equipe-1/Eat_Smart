import styled from 'styled-components';

export const StyledEditCommerceProfileModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: flex-end;
  width: 100vw;
  position: fixed;
  inset: 0;
  z-index: 1000;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0.5px);
  box-shadow: 0px 9px 2px rgba(0, 0, 0, 0.25);

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2.5rem;
    width: 18.75rem;
    background-color: #ffffff;
    gap: 1rem;
    padding: 1rem 1rem 0 1rem;
    border-radius: 1.5rem 0rem 0rem 0rem;

    img {
      object-fit: container;
      width: 1.75rem;
      height: 1.75rem;
    }

    button {
      background: transparent;
      border: none;

      img {
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    // align-items: center;
    width: 18.75rem;
    background: #ffffff;
    padding: 1rem 1rem;
    gap: 1rem;

    h3 {
      font-size: 18px;
      font-weight: 600;
      margin: 2rem 0 0 0rem;
      width: 100%;
    }

    div {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        background-color: ${({ theme }) => theme.colors.white};
        width: 16.875rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray600};
      }

      input {
        border-radius: 0.25rem;
        width: 16.875rem;
        height: 2.8125rem;
        font-size: 0.875rem;
        border: 1px solid ${({ theme }) => theme.colors.gray300};
        color: ${({ theme }) => theme.colors.gray600};
        background-color: ${({ theme }) => theme.colors.white};
        padding: 0;

        ::placeholder {
          color: ${({ theme }) => theme.colors.gray150};
          padding-left: 0.875rem;
        }
      }

      h2 {
        margin: 0;
        font-size: 0.75rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray150};
      }
    }

    button {
      width: 16.875rem;
      height: 2.8125rem;
      background-color: #056365;
      border: 1px solid #056365;
      border-radius: 0.9rem;
      color: #ffffff;
      font-size: 0.875rem;
      font-weight: 600;
      padding: 0;
      margin: 1rem 0;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 18.75rem;
    background-color: #ffffff;
    padding: 1rem 1rem 2rem 1rem;
    border-radius: 0 0rem 0rem 1.5rem;

    button {
      width: 16.875rem;
      height: 2.8125rem;
      background-color: #71cb9f;
      border: 1px solid #71cb9f;
      border-radius: 0.9rem;
      color: #056365;
      font-size: 0.875rem;
      font-weight: 600;
      padding: 0;
    }
  }
`;
