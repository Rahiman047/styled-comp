import styled from "styled-components";

const MainTitle = ({ title }) => {
  //getting title value from App.js
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline">/</div>
    </Wrapper>
  );
};
export default MainTitle;

const Wrapper = styled.div`
  //we can access the MainTitle div from here and we can access all the components in that div inside here
  h1 {
    //these styles are applied only to h1 that is present inside the Wrapper component
    text-align: center;
    text-transform: capitalize;
  }
  //if we have another div component i.e as in the case of div with className underline we can write as
  .underline {
    width: 5rem;
    height: 0.25 rem;
    margin: 0 auto;
    background-color: red;
  }
`;
