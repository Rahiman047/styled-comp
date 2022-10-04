import styled from "styled-components";
//import Basic from "./components/Basic";
//import { Btn, AnotherBtn } from "./components/Btn"; //named import from Btn.js
import Cont from "./components/Cont";
//import Button from "@mui/material/Button";
import MainTitle from "./components/MainTitle";

function App() {
  return (
    <Cont>
      <MainTitle title="Hello there main" />
      {/*passing the value of title to mainTitle component*/}
    </Cont>
  );
}

export default App;
