import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color:${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .stars {
    display: flex;
    gap: 5px;
     margin: 9px 5px 16px 0;

    color: ${({ theme }) => theme.COLORS.PINK};

  }
  
  > p {
    font-family: 'Roboto', serif;
    font-size: 16px;
    color: #999591;
    text-align: justify;

    overflow: hidden; /* remove o estouro do elemento */
    text-overflow: ellipsis; /* adiciona “...” no final */
    display: -webkit-box;
    -webkit-line-clamp: 2; /* quantidade de linhas */
    -webkit-box-orient: vertical; /* conteúdo será apresentado verticalmente */  
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

`;