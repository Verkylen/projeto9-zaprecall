import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import Top from "./Top";
import Flashcards from "./Flashcards";
import Bottom from "./Bottom";

export default function App() {
    let [openQuestion, setOpenQuestion] = React.useState(false);
    let [openCard, setOpenCard] = React.useState(false);
    let [offAlternatives, setOffAlternatives] = React.useState(true);
    let [responses, setResponses] = React.useState([]);
    let [lastClicked, setLastClicked] = React.useState(null);

    return (
        <>
            <GlobalStyle />
            <>
                <Top/>

                <Flashcards openQuestion={openQuestion}
                            setOpenQuestion={setOpenQuestion}
                            openCard={openCard}
                            setOpenCard={setOpenCard}
                            setOffAlternatives={setOffAlternatives}
                            responses={responses}
                            lastClicked={lastClicked}
                            setLastClicked={setLastClicked}/>

                <Bottom offAlternatives={offAlternatives}
                        setOffAlternatives={setOffAlternatives}
                        setResponses={setResponses}
                        setOpenQuestion={setOpenQuestion}
                        setOpenCard={setOpenCard}
                        lastClicked={lastClicked}
                        setLastClicked={setLastClicked}
                        responses={responses}/>
            </>
        </>
    );
}