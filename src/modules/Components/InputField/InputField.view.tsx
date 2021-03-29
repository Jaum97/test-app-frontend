import React from "react";
import InputMask from "react-input-mask";

import { InputWrapper } from "./InputField.styles";
import { IProps } from "./InputField.types";

function InputField(props: IProps) {
  const {
    mask,
    type,
    disabled = false,
    onChange,
    id,
    label,
    name,
    maxLength,
    value,
    infoMsg,
    hasError = false,
    secondary = false,
  } = props;

  const inputProps = {
    disabled,
    id,
    maxLength,
    name,
    onChange,
    required: true,
    type,
    value,
  };

  return (
    <InputWrapper secondary={secondary} hasError={hasError}>
      {mask ? (
        <InputMask {...inputProps} mask={mask} />
      ) : (
        <input {...inputProps} />
      )}

      <label htmlFor={id}>{label}</label>

      {/* {hasError ? (
        <span className="error-msg">{errorMessage || "Campo inválido"}</span>
      ) : null} */}

      {infoMsg ? <span className="info-msg">{infoMsg}</span> : null}
    </InputWrapper>
  );
}

export default InputField;
