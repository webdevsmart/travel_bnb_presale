import React from "react";
import {
  BtnDiv,
  Input,
  InputDiv,
  InputFieldDiv,
  InputLabel,
} from "./StyledInput";

type InputProps = {
  value: string;
  placeholder?: string;
  label: string;
  btn: string;
  onChange: any;
  name: string;
};

const InputField = ({
  label,
  value,
  btn,
  placeholder,
  onChange,
  name,
}: InputProps) => {
  return (
    <InputFieldDiv>
      <InputDiv>
        <InputLabel>{label}</InputLabel>
        <Input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
        />
      </InputDiv>
      <BtnDiv>{btn}</BtnDiv>
    </InputFieldDiv>
  );
};

export default InputField;
