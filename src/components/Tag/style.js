import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 8px 16px;
  border-radius: 5px;
  margin-right: 6px;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;