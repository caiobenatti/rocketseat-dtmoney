// import styled from 'styled-components'

import { GlobalStyle } from "./styles/global";

// const Title = styled.h1` //vc usa aqui a tag HTML que vc quer modificar e usa a maiuscula no nome para nome da constante (best practices)
// color: #8257e6;
// font-size: 64px;
// ` //usa aspas para o styled-component ai vc usa o nome da constante como tag de HTML, vc pode usar encadeamento tipo no SASS

export function App() {
  return (
    <div className="App">
      {/* <Title>Hello World</Title> */}
      <h1>Hello</h1>
      <GlobalStyle />
    </div>
  );
}

