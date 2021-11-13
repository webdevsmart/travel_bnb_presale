import React from "react";
import {
  ConnectWalletBtn,
  HeaderDescDiv,
  HeaderResponsiveTitle,
  HeaderTextPartDiv,
  HeaderTitle,
  HeaderTitleDiv,
  TravelBNBBtn,
} from "./StyledLanding";
import { useEthers } from "@usedapp/core";
import travelBtn from "assets/TravelBNBBtn.svg";
import metaImg from "assets/metamask.svg";

const HeaderTextPart = () => {
  const { activateBrowserWallet, account } = useEthers();

  function handleConnectWallet() {
    activateBrowserWallet();
  }
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
        <ConnectWalletBtn
          onClick={() => {
            handleConnectWallet();
          }}
        >
          <div>
            <img src={metaImg} alt="metaImg" />
          </div>

          {account
            ? `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}`
            : "Connect Wallet"}
        </ConnectWalletBtn>
      </HeaderTitleDiv>
      <HeaderResponsiveTitle>
        <div className="main_title">Buy TravelBNB</div>
        <div className="sub_title">
          MIN: ~0.05 BNB / MAX: ~5 BNB (+GAS BNB / BEP20)
        </div>
      </HeaderResponsiveTitle>
      <HeaderDescDiv>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim{" "}
      </HeaderDescDiv>
    </HeaderTextPartDiv>
  );
};

export default HeaderTextPart;
