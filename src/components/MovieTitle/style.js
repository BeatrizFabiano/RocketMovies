import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 24px;

  
  > h1 {
    font-size: 36px;
    font-weight: 500;
    margin-right: 10px;
  }

  button {
    margin: 8px 5px 0 0;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

`;