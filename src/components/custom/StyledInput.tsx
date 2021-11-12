import styled from "styled-components";

export const InputFieldDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: white;
  border-radius: 35px;
  align-items: center;
`;

export const InputDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-gap: 15px;
  width: calc(100% - 150px);
`;

export const BtnDiv = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #868686;
  background-color: #eeeeee;
  border-radius: 31px;
  height: 77px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 130px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 18px;
    width: 100px;
    transition: 0.2s linear;
  }
`;

export const InputLabel = styled.div`
  color: #868686;
  font-size: 22px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 18px;
    transition: 0.2s linear;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 28px;
  ::placeholder {
    color: #ddd;
  }
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 22px;
    transition: 0.2s linear;
  }
`;
