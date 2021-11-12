import InputField from "components/custom/InputField";
import React, { useState } from "react";
import {
  BuyBtn,
  CardDesc,
  CardTitle,
  FormGroup,
  SwapCardPartDiv,
} from "./StyledLanding";
import buyImg from "assets/buy.svg";

const SwapCardPart = () => {
  const [state, setState] = useState({
    from: "",
    to: "",
  });

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <SwapCardPartDiv>
      <CardTitle>Swap</CardTitle>
      <FormGroup>
        <InputField
          value={state.from}
          onChange={handleChange}
          name="from"
          label="From"
          btn="BNB"
          placeholder="From"
        />
        <InputField
          value={state.to}
          onChange={handleChange}
          label="To"
          name="to"
          btn="Travelbnb"
          placeholder="To"
        />
      </FormGroup>
      <BuyBtn>
        <div>
          <img src={buyImg} alt="buyImg" />
        </div>
        BUY Travelbnb
      </BuyBtn>
      <CardDesc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla
      </CardDesc>
    </SwapCardPartDiv>
  );
};

export default SwapCardPart;
