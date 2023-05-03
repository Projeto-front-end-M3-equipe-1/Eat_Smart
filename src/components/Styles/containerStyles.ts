import styled from 'styled-components';
import bag_principal from '../../assets/images/bag_principal.png';

export const StyledContainer = styled.body`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 200px;
  section {
    max-width: 500px;
    display: flex;
    gap: 15px;
    width: 50%;
    height: auto;
    flex-direction: column;
  }
`;

export const StyledCartSale = styled.li`
  font-family: 'Poppins';
  margin: 30px;
  width: 262px;
  height: 248px;

  :hover {
    transform: scale(1.1);
    transition: 1s;
  }

  div {
    width: 250px;
    border-radius: 16px;
    height: 275px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .img {
      background-image: url(${bag_principal});
      background-repeat: no-repeat;
      width: 250px;
      height: 160px;
      border-radius: 16px;
      padding-top: 15px;
      h1 {
        margin-top: -15px;
      }
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info {
          margin-top: 5px;
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
        margin: 0 0 0 5%;
        color: white;
        font-size: 26px;
        font-weight: 700;
      }
    }
  }

  .description {
    height: 100px;
    h4 {
      width: 100%;
      margin: 0;
      color: ${({ theme }) => theme.colors.gray600};
      font-size: 14px;
      font-weight: 600;
      padding-left: 10%;
    }
    h5 {
      width: 100%;
      margin: 0;
      color: ${({ theme }) => theme.colors.gray600};
      font-size: 12px;
      font-weight: 500;
      padding-left: 10%;
    }
    span {
      width: 100%;
      display: flex;
      justify-content: space-between;
      i {
        color: ${({ theme }) => theme.colors.orangePrimary};
        font-size: 14px;
        margin-right: 8px;
      }
      small {
        padding-left: -5%;
        font-size: 12px;
        font-weight: 500;
      }
    }
    p {
      padding-left: 5%;
      color: ${({ theme }) => theme.colors.greenPrimary};
      font-size: 16px;
      font-weight: 700;
      margin-right: 8px;
    }
  }
`;
