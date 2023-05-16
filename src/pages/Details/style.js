/**Importar a biblioteca "css in js"*/
import styled from "styled-components";

/*___Armazenando dentro da constante "container" um elemento HTML que é uma "div" ou qualquer outro___*/
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px; 
    
    a {
      color: ${({ theme }) => theme.COLORS.WHITE}
    }
  } 
`;

export const Content = styled.div`
  max-width: 1113px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: start;
    display: flex;
    gap: 8px;
    align-content: center;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
    line-height: 22px;
  }

`;

