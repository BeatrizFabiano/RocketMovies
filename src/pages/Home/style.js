import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Top = styled.div`
  display:flex;
  justify-content:space-between;
  padding: 0 64px;
  margin-top: 48px; 
`;

export const Content = styled.div`
  padding: 0 64px;
  
`;

export const NewNote = styled.button`
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};


  svg {
    margin-right: 8px;
  }
  
`;