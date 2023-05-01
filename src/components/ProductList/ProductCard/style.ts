import styled from 'styled-components';

export const StyledProductCard = styled.li`
background-color: #FFFFFF;
width: 252px;
height: 248px;
border-radius: 16px;

div:first-child{
position: relative;
}

div:first-child > img:first-child{

}

div:first-child > h4{
    font-family: 'Poppins', sans-serif;
    font-size: 21px;
    font-weight: 700;
    color: #FFFFFF;
    position: absolute;
    top: 80px;
    left: 50px;
}

div:first-child > figure > img{
    position: absolute;
    top: 28px;
    left: 213px;
}

div:first-child > div{
    width: 117px;
    height: 25px;
    border-radius: 0 8px 8px 0;
    background-color: #FF543D;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 24px;
    left: 0px;
}

div:first-child > div > h3{
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #FFFFFF;
}

div:last-child{

}

div:last-child > div:first-child{
display: flex;
flex-direction: column;
gap: 6px;
margin-left: 15px;
margin-top: 5px;
}

div:last-child > div:first-child > h3{
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #2E2E2E;  
}

div:last-child > div:first-child > p{
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #2E2E2E;  
}

div:last-child > div:last-child{
    display: flex;
    justify-content: space-between;
    margin: 10px 15px 0 15px;

}

div:last-child > div:last-child > h4{
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #2E2E2E;  
}

div:last-child > div:last-child > h3{
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
`