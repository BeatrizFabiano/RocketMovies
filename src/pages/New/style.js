import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
 
  .tags {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
   
    border-radius: 10px;
    padding: 20px;
    margin-top: 24px;
  }
`;

export const Form = styled.form`
  max-width: 1137px;
  margin: 38px auto;

`;

export const Data = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;

  > Button:nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;