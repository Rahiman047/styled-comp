import styled from "styled-components";
import Basic from "./components/Basic";
import { Btn } from "./components/Btn"; //named import from Btn.js
import Cont from "./components/Cont";

function App() {
  return (
    <Cont>
      <Basic>Styled components</Basic>
      <Basic para>Hello there</Basic>
      <Basic name>Dont Click</Basic>
      <Btn type="button">Click</Btn>
    </Cont>
  );
}

export default App;
