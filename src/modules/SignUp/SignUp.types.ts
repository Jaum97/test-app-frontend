export interface IProps {}

export interface IViewProps {
  username: string;
  email: string;
  password: string;
  updateUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updatePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  createNewUser: () => void;
  inputsWithError: string[];
}
