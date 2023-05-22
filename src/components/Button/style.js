import styled from "styled-components";

export const Container = styled.button`
  width:100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding:0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

   /* "E quando esse botão estiver desabilitado". Esse tipo de escrita é o mesmo usado em SASS  */
  &:disabled {
    opacity: 0.5;
  }
`;