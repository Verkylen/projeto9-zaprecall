import React from "react";
import styled from "styled-components";
import Remembered from "./img/Remembered.svg";
import Almost from "./img/Almost.svg";
import Failed from "./img/Failed.svg";

export default function Bottom({offAlternatives, setOffAlternatives, setResponses, setOpenQuestion, setOpenCard, setLastClicked, responses, lastClicked}) {
    let [quantity, setQuantity] = React.useState(0);

    function clickResponse(color, icon) {
        const newResponses = {...responses};
        newResponses[lastClicked] = [color, icon];
        setResponses(newResponses);
        setOffAlternatives(true);
        setQuantity(quantity + 1);
        setOpenQuestion(false);
        setOpenCard(false);
        setLastClicked(null);
    }

    return (
    <Footer>
        <div>
            <button onClick={() => clickResponse('#ff3030', Failed)}
                    disabled={offAlternatives}>
                Não lembrei
            </button>
            <button onClick={() => clickResponse('#ff922e', Almost)}
                    disabled={offAlternatives}>
                Quase não lembrei
            </button>
            <button onClick={() => clickResponse('#2fbe34', Remembered)}
                    disabled={offAlternatives}>
                Zap!
            </button>
        </div>
        <div>
            <span>{quantity}/8 CONCLUÍDOS</span>
        </div>
    </Footer>
    );
}

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    z-index: 1;
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

        button {
            width: 85.17px;
            height: 37.17px;
            border: none;
            border-radius: 5px;
            font-family: 'Recursive', sans-serif;
            color: #ffffff;
            cursor: pointer;
        }

        button:nth-of-type(1) {
            background-color: #ff3030;
        }

        button:nth-of-type(2) {
            margin: 0 7.74px;
            background-color: #ff922e;
        }

        button:nth-of-type(3) {
            background-color: #2fbe34;
        }
    }

    div:last-of-type {
        width: 100%;
        height: calc(100% - (9px + 37.17px));
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            font-family: 'Recursive', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #333333;
        }
    }
`