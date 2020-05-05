// import React, { Component } from "react";
// import styled, { createGlobalStyle, css, keyframes } from "styled-components";

createGlobalStyle`body{padding:0;margin:0;}`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button>Hello</Button>
        <Button danger>씨발</Button>
        <Anchor href="http://google.com">Go to google</Anchor>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#2ecc71")};
  ${(props) => {
    if (props.danger) {
      return css`
        animation: ${rotation} 2s linear infinite;
      `;
    }
  }}
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

//export default App;
