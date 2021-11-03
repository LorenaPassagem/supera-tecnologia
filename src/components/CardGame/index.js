import styled from 'styled-components'

//aqui envolve tudo ?
export const WrapGame = styled.div`
    display: flex;
    align-items:baseline;
    justify-content: flex-start;
`;

//aqui envolver todos os cards
export const WrapCard = styled.div`
    background-color: #f1f1f1;
    border: 2px solid black;
    box-shadow: 10px -5px lightgrey;;
    margin: 2%;
    border-radius: 2%;
    
`;

export const CardImg = styled.img`
    object-fit: contain;

`;

export const GameTitle = styled.h3`
    font-size: medium;
`;