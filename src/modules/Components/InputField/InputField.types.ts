import { ChangeEvent } from "react";

export interface IProps {
  disabled?: boolean;
  errorMessage?: string;
  hasError?: boolean;
  id: string;
  infoMsg?: string;
  label: string;
  mask?: string;
  maxLength?: number;
  name?: string;
  secondary?: boolean;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
