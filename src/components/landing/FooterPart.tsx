import React from "react";
import { FooterPartDiv, CopyBtn } from "./StyledLanding";
import Copybtn from "assets/copy.svg";

const FooterPart = () => {
  return (
    <FooterPartDiv>
      <div>TOKEN ADDRESS: 0xd631d33f2c3f38d9abdae08ebc0b69fa636e8ec2</div>
      <CopyBtn>
        <div>
          <img src={Copybtn} alt="Copybtn" />
        </div>
        Copy Address
      </CopyBtn>
    </FooterPartDiv>
  );
};

export default FooterPart;
