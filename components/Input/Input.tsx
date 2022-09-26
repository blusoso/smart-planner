import React from "react";
import { InputWrapper, InputStyled } from "./Input.styled";

export type InputProps = {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  onClick?: () => void;
  onFocus?: () => void;
  onChange?: (value: any, name?: string) => void;
  onBlur?: () => void;
  value: string;
  disabled: boolean;
  autoFocus: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const Input = ({
  id,
  type = "text",
  name,
  placeholder,
  onClick,
  onChange,
  onFocus,
  onBlur,
  value,
  disabled,
  autoFocus,
  startIcon,
  endIcon,
}: InputProps) => {
  return (
    <InputWrapper isStartIcon={!!startIcon} isEndIcon={!!endIcon}>
      {startIcon && startIcon}
      <InputStyled
        id={id}
        type={type}
        name={name || id}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        autoFocus={autoFocus}
        isStartIcon={!!startIcon}
        isEndIcon={!!endIcon}
      />
      {endIcon && endIcon}
    </InputWrapper>
  );
};

export default Input;
