import styled from "styled-components";
import LandingImg from "assets/landing.png";

export const LandingDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 35px 0;
  height: 100%;
  background: url(${LandingImg});
  background-size: 100% 100%;
`;

export const HeaderTextPartDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 29px;
  margin-bottom: 40px;
`;

export const HeaderTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const HeaderDescDiv = styled.div`
  font-size: 30px;
  text-align: center;
  width: 60%;
  margin: auto;
`;

export const TravelBNBBtn = styled.div`
  cursor: pointer;
  border-radius: 39px;
  width: 300px;
  height: 90px;
  padding: 2px 7px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 285px;
    /* height: ; */
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 22px;
  color: #333333;
  .main_title {
    font-size: 36px;
    font-weight: 900;
    line-height: 42px;
  }
  .sub_title {
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
  }
`;

export const ConnectWalletBtn = styled.div`
  cursor: pointer;
  color: white;
  font-size: 24px;
  img {
    width: 31px;
  }
  div {
    width: 50px;
    height: 50px;
    background-color: #ffffff50;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  display: flex;
  align-items: center;
  border: 3px solid #efe1e1;
  padding: 12px 25px;
  border-radius: 30px;
  grid-gap: 10px;
  background: linear-gradient(92.51deg, #f7931e -36.81%, #ffdd2b 118.97%);
`;

export const SwapCardPartDiv = styled.div`
  max-width: 967px;
  width: 100%;
  margin: auto;
  padding: 69px 37px 64px 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(239, 239, 239, 0.4);
  border-radius: 70px;
  backdrop-filter: blur(80px);
  border: 1px solid #ffffff;
  margin-bottom: 37px;
`;

export const CardTitle = styled.div`
  font-size: 40px;
  color: #000000;
  text-align: center;
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  grid-gap: 35px;
  /* & > *:not(:last-child) {
    margin-bottom: 35px;
  } */
  margin-bottom: 45px;
`;

export const BuyBtn = styled.div`
  color: white;
  cursor: pointer;
  font-size: 24px;
  img {
    width: 31px;
  }
  div {
    width: 50px;
    height: 50px;
    background-color: #ffffff50;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  max-width: 574px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #efe1e1;
  padding: 12px 25px;
  border-radius: 30px;
  grid-gap: 30px;
  background: #f7931e;
  margin-bottom: 46px;
`;

export const CardDesc = styled.div`
  font-size: 30px;
  text-align: center;
`;

export const FooterPartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 19px;
  div {
    font-size: 26px;
    text-align: center;
    color: #eeeeee;
  }
`;

export const CopyBtn = styled.div`
  cursor: pointer;
  background-color: #fbfbfb;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 12px;
  font-size: 20px;
  color: black !important;
  padding: 18px 20px;
  img {
    width: 20px;
  }
`;
