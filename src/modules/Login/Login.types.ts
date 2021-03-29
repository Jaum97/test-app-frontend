export interface IProps {}

export interface IViewProps {
  updateLogin: () => void;
  login: string;
  updatePassword: () => void;
  password: string;
  tryLogin: () => void;
  signup: () => void;
}
