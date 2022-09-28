import GlobalStyle from "./theme/GlobalStyle";
import Logo from "./img/Logo.svg";
import Start from "./img/Start.svg";
import Rotate from "./img/Rotate.svg";
import Remembered from "./img/Remembered.svg";
import Almost from "./img/Almost.svg";
import Failed from "./img/Failed.svg";
import styled from "styled-components";
import Top from "./Top";

export default function App() {
  return (
    <>
        <GlobalStyle />
        <Content>
            <Top/>
            <Container>
                <div>Pergunta 1 <img src={Almost}/></div>
                <div>Pergunta 2 <img src={Failed}/></div>
                <div>Pergunta 3 <img src={Remembered}/></div>
                <div>Pergunta 4 <img src={Rotate}/></div>
                <div>Pergunta 5 <img src={Start}/></div>
            </Container>
            <Footer>
                <div>
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
                <div>
                    <span>CONCLUÍDOS</span>
                </div>
            </Footer>
        </Content>
    </>
  );
}

const Content = styled.div`
    overflow-y: hidden;
`

const Container = styled.div`
    margin-top: 153px;
    height: 100vh;
    background-color: #fb6b6b;
`

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 111px;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.08);
    background-color: #ffffff;

    div:first-of-type {
        margin-top: 9px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        button:nth-of-type(1) {
            width: 85.17px;
            height: 37.17px;
            background-color: #ff3030;
            border: none;
            border-radius: 5px;
            color: #ffffff;
        }

        button:nth-of-type(2) {
            margin: auto 7.74px;
            width: 85.17px;
            height: 37.17px;
            background-color: #ff922e;
            border: none;
            border-radius: 5px;
            color: #ffffff;
        }

        button:nth-of-type(3) {
            width: 85.17px;
            height: 37.17px;
            background-color: #2fbe34;
            border: none;
            border-radius: 5px;
            color: #ffffff;
        }
    }

    div:last-of-type {
        width: 100%;
        height: calc(100% - (9px + 37.17px));
        display: flex;
        justify-content: center;
        align-items: center;
    }
`