import GlobalStyle from "./theme/GlobalStyle";
import Logo from "./img/Logo.svg";
import styled from "styled-components";

export default function App() {
  return (
    <>
        <GlobalStyle />
        <Content>
            <Header>
                <img src={Logo} alt="Logo ZapRecall"/>
                <h1>ZapRecall</h1>
            </Header>
            <Container></Container>
            <Footer>
                <div>
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
                <span>CONCLUÍDOS</span>
            </Footer>
        </Content>
    </>
  );
}

const Content = styled.div`
    background-color: #fb6b6b;
`

const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 153px;
    background-color: #fb6b6b;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    margin-top: 153px;
`

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 111px;
    background-color: #ffffff;
    text-align: center;

    div {
        button:nth-of-type(1) {
            background-color: #ff3030;
            border: none;
            color: #ffffff;
        }
        button:nth-of-type(2) {
            background-color: #ff922e;
            border: none;
            color: #ffffff;
        }
        button:nth-of-type(3) {
            background-color: #2fbe34;
            border: none;
            color: #ffffff;
        }
    }
`