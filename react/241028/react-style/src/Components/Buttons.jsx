import styled from 'styled-components';

const Button = styled.button`
    padding: 10px;
    color: white;
    background-color: royalblue;
`;

const ButtonStyle2 = styled(Button)`
    color: black;
    border-radius: 10px;
    font-weight:bold;
    box-shadow: 0px 0px 1px 1px rgba(0,0,0, .3);
`;

const ButtonStyle3 = styled(Button)`
    color: yellow;
    background-color: lightgreen;
    border-radius: 10px;
    border:none;
    box-shadow: 0px 0px 1px 1px rgba(0,0,0, .3);
`;


export { Button, ButtonStyle2, ButtonStyle3 };
