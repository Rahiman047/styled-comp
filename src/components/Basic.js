import styled from "styled-components";

const Basic = styled.h1`
  text-align: center;
  text-transform: capitalize;
  font-size: 30px;

  font-size: ${(props) =>
    props.para &&
    "20px"}; //checking for props passed in as para in Basic comp in App.js

  color: ${({ name }) =>
    name &&
    "red"}; //the above can also be written as this here too checking for props passed in as name in Basic comp in App.js
`;

export default Basic;
