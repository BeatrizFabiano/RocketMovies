import styled from "styled-components";


export const Container = styled.div`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  wrap: nowrap;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logo = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.PINK};
  
`;
