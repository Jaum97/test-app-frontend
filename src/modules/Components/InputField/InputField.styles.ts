import { colors } from "src/modules/styles/colors";
import styled from "styled-components";

export const InputWrapper = styled.div<{ secondary: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  padding-bottom: 16px;

  label {
    position: absolute;
    top: 21px;
    left: 16px;
    color: ${colors.grey};
    font-weight: 500;
    font-size: 1em;
    letter-spacing: 0.3px;

    cursor: text;

    transition: all 0.3s;
  }

  input {
    padding: 26px 24px 10px 28px;
    border: solid 1px white;
    border-radius: 24px;
    color: ${colors.grey};
    background: ${colors.white};
    border: solid 1px ${colors.primary};
    width: 100%;
    font-size: inherit;

    &:focus,
    &:valid {
      border: solid 1px ${colors.primary};

      + label {
        top: 12px;
        left: 16px;
        font-size: 0.625rem;
        color: ${colors.grey};
        transition: all 0.3s;
      }
    }

    &[disabled] {
      border: solid 1px white;
      color: white;
      cursor: not-allowed;
      + label {
        left: 16px;
        top: 12px;
      }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #b34444 inset !important;
      -webkit-text-fill-color: #eeeeee !important;
      box-shadow: 0 0 0 30px #b34444 inset !important;
    }
  }
  .error-msg {
    display: none;
  }

  .info-msg {
    display: block;
    color: white;
    margin-top: 8px;
    text-transform: uppercase;
    font-size: 0.625rem;
    @include font-type(2);
    letter-spacing: 0.5px;
  }

  &.error {
    input {
      border: solid 1px #ff6767;

      + label {
        color: #ff6767;
      }
    }

    .error-msg {
      display: block;
      color: #ff6767;
      margin-top: 8px;
      text-transform: uppercase;
      font-size: 0.625rem;
      @include font-type(2);
      letter-spacing: 0.5px;
    }
  }
`;

export const InputSecondary = styled(InputWrapper)`
  input {
    border: solid 1px #d1d1d1;
    color: #d1d1d1;
    + label {
      color: $grey;
      text-transform: uppercase;
    }
    &[disabled] {
      border: solid 1px #d1d1d1;
      color: #d1d1d1;
      + label {
        color: $grey;
        text-transform: uppercase;
      }
    }
    &:focus,
    &:valid {
      border: solid 1px $grey;
      color: $grey;
      + label {
        top: 12px;
        left: 16px;
        font-size: 0.625rem;
        color: $grey;
      }
    }

    &.error {
      input {
        border: solid 1px #ff6767;

        + label {
          color: #ff6767;
        }
      }

      .error-msg {
        display: block;
        color: #ff6767;
        margin-top: 8px;
        text-transform: uppercase;
        font-size: 0.625rem;
        @include font-type(2);
        letter-spacing: 0.5px;
      }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
      box-shadow: 0 0 0 30px white inset !important;
      -webkit-text-fill-color: #979e97 !important;
    }
  }

  .info-msg {
    display: block;
    color: #979e97;
    margin-top: 8px;
    text-transform: uppercase;
    font-size: 0.625rem;
    @include font-type(2);
    letter-spacing: 0.5px;
  }
`;
