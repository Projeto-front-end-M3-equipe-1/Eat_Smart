import styled from 'styled-components';

export const StyleDivContainer = styled.div`
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 100%;

    section {
        width:50%;
        height:50%;

        h1 {
            color: ${({ theme }) => theme.colors.orangePrimary};
            position: absolute;
            left: 33px;

            span {
              color: ${({ theme }) => theme.colors.white};
            }
       
        img {
            width:100%;
            heigth:100%;
        }
    }
`
export const DivContainer2 = styled.div `
    background:#056365;
    width:50%;


`



 



