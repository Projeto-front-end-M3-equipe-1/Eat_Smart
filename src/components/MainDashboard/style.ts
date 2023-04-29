import styled from 'styled-components';
import backgroundImage from '../../assets/images/background.svg'

export const StyledMainDashboard = styled.main`
display: flex;
width: 100vw;
height: 100vh;

background-image: url(${backgroundImage});


section:first-child{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 96px;
}

section:first-child > div:first-child{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
}

section:first-child > div:first-child > h1{
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #FFFFFF;
}

section:first-child > div:first-child > h2{
    font-family: 'Nerko One', cursive;
    font-size: 64px;
    font-weight: 400;
    line-height: 74px;
    color: #FF543D;
    width: 250px;
}

section:first-child > div:last-child{
display: flex;
flex-direction: column;
    align-items: center;
gap: 72px;
}

section:first-child > div:last-child > p{
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: #FFFFFF;
    width: 571px;
    text-align: center;
}

section:first-child > div:last-child > small{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: #FFFFFF;
    width: 535px;
    text-align: center;
}



section:last-child{
    width: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
}

section:last-child > img{
    width: 599px;
}
`