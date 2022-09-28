import styled from "styled-components";
import Logo from "./img/Logo.svg";

export default function Top() {
    return (
        <Header>
            <img src={Logo} alt="Logo ZapRecall"/>
            <h1>ZapRecall</h1>
        </Header>
    );
}

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