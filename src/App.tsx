// import styled from 'styled-components'

import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

// const Title = styled.h1` //vc usa aqui a tag HTML que vc quer modificar e usa a maiuscula no nome para nome da constante (best practices)
// color: #8257e6;
// font-size: 64px;
// ` //usa aspas para o styled-component ai vc usa o nome da constante como tag de HTML, vc pode usar encadeamento tipo no SASS

export function App() {
  return (
    <> {/* isso eh um fragment, que nao interfere com as divs dentro do react, eh tipo uma div */}
      {/* <Title>Hello World</Title> */}
      
      <GlobalStyle />
      <Header/>
    </>
  );
}

