import styled from "styled-components";
import Start from "./img/Start.svg";
import Rotate from "./img/Rotate.svg";
import Remembered from "./img/Remembered.svg";
import Almost from "./img/Almost.svg";
import Failed from "./img/Failed.svg";

export default function Flashcards() {
    const cards = [
        {question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript'},
        {question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces'},
        {question: 'Componentes devem iniciar com __', answer: 'letra maiúscula'},
        {question: 'Podemos colocar __ dentro do JSX', answer: 'expressões'},
        {question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma'},
        {question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências'},
        {question: 'Usamos props para __', answer: 'passar diferentes informações para componentes'},
        {question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
    ]

    const questions = [];
    for (let i = 1; i <= 8; i++) {
        questions.push(<Question><span>Pergunta {i}</span><img src={Start}/></Question>);
    }

    return (
        <Container>
            <Cards><div>{cards[0].question}</div><img src={Rotate} alt="Rotate"/></Cards>
            {questions}
        </Container>
    );
}

const Container = styled.div`
    margin-top: 153px;
    margin-bottom: 111px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Cards = styled.div`
    position: relative;
    margin-bottom: 25px;
    width: 300px;
    height: 131px;
    background-color: #ffffd5;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    div {
        margin-top: 18px;
        margin-left: 15px;
        font-family: 'Recursive', sans-serif;
    }

    img {
        position: absolute;
        right: 15px;
        bottom: 6px;
    }
`

const Question = styled.div`
    margin-bottom: 25px;
    width: 300px;
    height: 65px;
    background-color: #ffffff;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    align-items: center;

    span {
        margin-left: 15px;
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    img {
        margin-right: 15px;
        margin-left: auto;
    }
`