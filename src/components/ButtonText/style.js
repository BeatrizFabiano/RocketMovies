import styled from 'styled-components';

export const Container = styled.button`
  background:none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.GRAY_100 : theme.COLORS.PINK};

  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;

`;