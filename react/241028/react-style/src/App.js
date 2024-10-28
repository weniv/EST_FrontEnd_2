import React from "react";
import styled, { css } from 'styled-components';
import { Button, ButtonStyle2, ButtonStyle3 } from "./Components/Buttons";
import StyledButtons from "./Components/StyledButton";

const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

const Three = styled.div`
  ${One}
  ${Two}
`;

const App = () => {
  return (
    <>
      <StyledButtons />
      <Button>버튼1</Button>
      <ButtonStyle2>버튼 2</ButtonStyle2>
      <ButtonStyle3>버튼 3</ButtonStyle3>
      <Three $data-size="large">Lorem ipsum dolor</Three>
    </>
  );
};

export default App;