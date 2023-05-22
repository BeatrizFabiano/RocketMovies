import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
 
  > input {
    height: 56px;
    width: 100%;
    border-radius: 10px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

  }

`;