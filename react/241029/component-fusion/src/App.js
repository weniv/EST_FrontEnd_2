import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${Normalize}

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
    padding: 0;
  }

  button{
    border: none;
    cursor: pointer;
  }
`;


function App() {
  return (
    <div>
      <GlobalStyle />
      hello world
      <button>hello</button>
    </div>
  );
}


export default App;
