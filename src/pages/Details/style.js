/**Importar a biblioteca "css in js"*/
import styled from "styled-components";

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
    overflow-y: auto;
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

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
    line-height: 22px;
  }

`;

export const DateTime = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 24px;
  
  > h3 {
    font-size: 16px;
    font-weight: 400;
  }

  > img {
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }

`;



