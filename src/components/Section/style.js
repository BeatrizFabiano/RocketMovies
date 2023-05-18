import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;
  overflow-y: scroll;
  max-height: 400px;
  padding-right: 8px;
  
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.PINK}; 
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`;