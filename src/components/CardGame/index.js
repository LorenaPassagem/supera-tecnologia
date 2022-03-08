import styled from 'styled-components'

//aqui envolve tudo ?
export const WrapGame = styled.div`
    display: grid;
    grid-template-columns:1fr 1r;
    align-items:baseline;
    justify-content: flex-start;
`;//será um component que recebera wrapcard cardimg etc

//aqui envolver todos os cards
export const WrapCard = styled.div`
    
    background-color: red;
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
//cardGame deve ser um component que receberá os filhos 
// então só o cardgame ser desenhado no appjs