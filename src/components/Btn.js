import styled from "styled-components";

export const Btn = styled.button`
  // named export we can export remaining if added here
  display: block;
  width: 300px;
  align-self: center;
  color: white;
  background-color: blue;
  cursor: pointer;
  padding: 12px;
  border-radius: 9px;
  border-width: 0px;
  text-transform: capitalize;
`;

export const AnotherBtn = styled(Btn)`
  //here we can get all the props of Btn and we can change only certain values
  color: white;
  background-color: black;
`;
