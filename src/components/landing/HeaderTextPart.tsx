import React from "react";
import {
  ConnectWalletBtn,
  HeaderDescDiv,
  HeaderTextPartDiv,
  HeaderTitle,
  HeaderTitleDiv,
  TravelBNBBtn,
} from "./StyledLanding";
import travelBtn from "assets/TravelBNBBtn.svg";
import metaImg from "assets/metamask.svg";

const HeaderTextPart = () => {
  return (
    <HeaderTextPartDiv>
      <HeaderTitleDiv>
        <TravelBNBBtn>
          <img src={travelBtn} alt="travelBtn" />
        </TravelBNBBtn>
        <HeaderTitle>
          <div className="main_title">Buy TravelBNB</div>
          <div className="sub_title">
            MIN: ~0.05 BNB / MAX: ~5 BNB (+GAS BNB / BEP20)
          </div>
        </HeaderTitle>
        <ConnectWalletBtn>
          <div>
            <img src={metaImg} alt="metaImg" />
          </div>
          Connect Wallet
        </ConnectWalletBtn>
      </HeaderTitleDiv>
      <HeaderDescDiv>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim{" "}
      </HeaderDescDiv>
    </HeaderTextPartDiv>
  );
};

export default HeaderTextPart;
