interface IRequiredProps {
  children: React.ReactChildren | string;
  onClick: () => void;
  gradient?: boolean;
}

export type IProps = Omit<JSX.IntrinsicElements["button"], "ref"> &
  IRequiredProps;
