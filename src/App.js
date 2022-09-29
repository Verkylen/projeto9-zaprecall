import GlobalStyle from "./theme/GlobalStyle";
import Top from "./Top";
import Bottom from "./Bottom";
import Flashcards from "./Flashcards";

export default function App() {
  return (
    <>
        <GlobalStyle />
        <>
            <Top/>
            <Flashcards/>
            <Bottom/>
        </>
    </>
  );
}