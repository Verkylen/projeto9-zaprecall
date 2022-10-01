import React from "react";
import styled from "styled-components";
import Start from "./img/Start.svg";
import Rotate from "./img/Rotate.svg";

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

export default function Flashcards({openQuestion, setOpenQuestion, openCard, setOpenCard, setOffAlternatives, responses, lastClicked, setLastClicked}) {
    function renderBox(card, i) {
        if (lastClicked !== i) {
            return (
                <QuestionStyle key={i} id={i} responses={responses}>
                    <span>Pergunta {i+1}</span>
                    <img onClick={() => changeList(i)}
                         src={(i in responses)? responses[i][1]: Start}
                         alt="Iniciar cartão"/>
                </QuestionStyle>
            );
        }
        else if (!openCard) {
            return (
                <CardStyle key={i}>
                    <span>{card.question}</span>
                    <img onClick={() => {setOpenCard(true); setOffAlternatives(false)}}
                         src={Rotate}
                         alt="Conferir resposta"/>
                </CardStyle>
            );
        }
        else {
            return (
                <CardStyle key={i}>
                    <span>{card.answer}</span>
                </CardStyle>
            );
        }
    }

    function changeList(i) {
        if (!openQuestion && !(i in responses)) {
            setOpenQuestion(!openQuestion);
            setLastClicked(i);
        }
    }

    return (
        <Container>
            {cards.map(renderBox)}
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

const QuestionStyle = styled.div`
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
        color: ${props => (props.id in props.responses)? (props.responses)[props.id][0]: '#333333'};
    }

    img {
        margin-right: 15px;
        margin-left: auto;
        cursor: ${props => (props.id in props.responses)? 'auto': 'pointer'};
    }
`

const CardStyle = styled.div`
    position: relative;
    margin-bottom: 25px;
    width: 300px;
    height: 131px;
    padding: 18px 15px 0 15px;
    background-color: #ffffd5;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    span {
        display: block;
        font-family: 'Recursive', sans-serif;
    }

    img {
        position: absolute;
        right: 15px;
        bottom: 6px;
        cursor: pointer;
    }
`