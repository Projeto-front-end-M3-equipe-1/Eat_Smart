import styled from 'styled-components';
import ellipse from '../../assets/icons/ellipse.svg';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.greenPrimary};
  background-image: url(${ellipse});
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 2rem;

  .infos_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    width: 200px;
    padding: 1.875rem 0 0.625rem 0;
  }

  .infos_container > img {
    width: 100px;
  }

  .infos_container > .img_container {
    display: flex;
    justify-content: space-between;
  }

  .infos_container > .img_container > img {
    cursor: pointer;
  }

  .faq_container {
    display: flex;
    flex-direction: column;
    max-height: 150px;
    color: ${({ theme }) => theme.colors.white};
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.5rem;
    padding-bottom: 1rem;
  }

  .faq_container > p {
    cursor: pointer;
  }

  .footerMiddle__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 21.875rem;
  }

  .footerMiddle__container > h1 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.white};
  }

  .footerMiddle__container > h1 > small {
    color: ${({ theme }) => theme.colors.orangePrimary};
  }

  .footerMiddle__container > p {
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footerMiddle__container > p > strong {
    color: ${({ theme }) => theme.colors.orangePrimary};
  }

  figure {
    display: flex;
    align-items: end;
    margin: 0;
    background-image: url(${ellipse});
    background-repeat: no-repeat;
  }

  @media (min-width: 1024px) {
    display: flex;
    padding-left: 182px;
    margin: #f1ede7;
    max-width: 1440px;

    .faq_container {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5rem;
      padding-bottom: 1rem;
    }

    .faq_container > p {
      cursor: pointer;
    }

    .footerMiddle__container {
      width: 1440px;
    }

    .footerMiddle__container > h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5rem;
      color: ${({ theme }) => theme.colors.white};
    }

    .footerMiddle__container > p {
      width: 100%;
      margin-top: 4rem;
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.625rem;
      font-weight: 400;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    .footerMiddle__container > p > strong {
      color: ${({ theme }) => theme.colors.orangePrimary};
      align-items: center;
    }
  }
`;
