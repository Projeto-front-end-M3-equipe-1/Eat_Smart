import styled from 'styled-components';
import bag_principal from '../../../assets/images/bag_principal.png';

/* export const StyledProductCard = styled.li`
  background-color: #ffffff;
  width: 252px;
  height: 248px;
  border-radius: 16px;

  div:first-child {
    position: relative;
  }

  div:first-child > img:first-child {
  }

  div:first-child > h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 21px;
    font-weight: 700;
    color: #ffffff;
    position: absolute;
    top: 80px;
    left: 50px;
  }

  div:first-child > figure > img {
    position: absolute;
    top: 28px;
    left: 213px;
  }

  div:first-child > div {
    width: 117px;
    height: 25px;
    border-radius: 0 8px 8px 0;
    background-color: #ff543d;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 24px;
    left: 0px;
  }

  div:first-child > div > h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
  }

  div:last-child {
  }

  div:last-child > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-left: 15px;
    margin-top: 5px;
  }

  div:last-child > div:first-child > h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #2e2e2e;
  }

  div:last-child > div:first-child > p {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #2e2e2e;
  }

  div:last-child > div:last-child {
    display: flex;
    justify-content: space-between;
    margin: 10px 15px 0 15px;
  }

  div:last-child > div:last-child > h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #2e2e2e;
  }

  div:last-child > div:last-child > h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #056365;
  }

  @media (min-width: 375px) {
  }

  @media (min-width: 425px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;
 */
export const StyledCartSale = styled.section`
  display: flex;
  font-family: 'Poppins';
  margin: 30px;
  width: 262px;
  height: 248px;
  transition: transform 300ms;
  position: relative;
  border: none !important;

  :hover {
    transform: scale(1.1);
  }

  .container__cart {
    display: flex;
    flex-direction: column;
    width: 250px !important;
    border-radius: 16px;
    height: 275px !important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: transform 300ms;
    position: relative;
    background-color: white;

    :hover {
      transform: scale(1.1);
    }
    .img {
      position: relative;
      background-image: url(${bag_principal});
      background-repeat: no-repeat;
      width: 250px;
      height: 160px;
      border-radius: 16px 16px 0px 0px;
      padding-top: 15px;
      h1 {
        margin-top: -15px;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: -2px;
        .info {
          padding: 5px;
          color: white;
          width: 113px;
          height: 28px;
          border-radius: 0 8px 8px 0;
          font-size: 18px;
          background-color: ${({ theme }) => theme.colors.orangePrimary};
        }

        i {
          color: ${({ theme }) => theme.colors.orangePrimary};
          font-size: 22px;
          margin-right: 15px;
        }
      }

      .name {
        margin: 1.275rem 0 0 0;
        color: white;
        font-size: 26px;
        font-weight: 700;
        padding-left: 15px;
      }
    }
    .img > span {
      display: none;
    }

    .img:hover > span {
      display: block;
    }
    .container_icons {
      position: absolute;
      margin-top: -15px;
      width: 100%;
      height: 275px;
      border-radius: 16px;
      background: linear-gradient(
        180deg,
        rgb(255, 84, 61, 0.4) 58%,
        rgba(255, 255, 255, 0) 50%
      );

      border-radius: 16px;
      button {
        cursor: pointer;
        padding-top: 4rem;
        margin: 0 35px;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.white};
        i {
          font-size: 44px;
          color: ${({ theme }) => theme.colors.white};
          :hover {
            color: ${({ theme }) => theme.colors.orangePrimary};
          }
          :active {
            color: ${({ theme }) => theme.colors.greenPrimary};
          }
        }
      }
    }
  }

  .description {
    height: 100px;
    width: 100%;
    h4 {
      margin-top: 1rem;
      width: 100%;
      color: ${({ theme }) => theme.colors.gray600};
      font-size: 14px;
      font-weight: 600;
      padding-left: 15px;
    }
    h5 {
      margin: 1rem 0 0 0;
      width: 100%;
      color: ${({ theme }) => theme.colors.gray600};
      font-size: 12px;
      font-weight: 500;
      padding-left: 15px;
    }
    span {
      margin: 1rem 0 0 0;
      width: 87%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 15px;
      i {
        color: ${({ theme }) => theme.colors.orangePrimary};
        font-size: 14px;
        margin-right: 3px;
      }
      small {
        padding-left: -5%;
        font-size: 12px;
        font-weight: 500;
      }
      p {
        color: ${({ theme }) => theme.colors.greenPrimary};
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
`;
