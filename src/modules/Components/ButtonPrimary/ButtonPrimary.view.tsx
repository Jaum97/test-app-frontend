import S from "./ButtonPrimary.styles";
import { IProps } from "./ButtonPrimary.types";

function ButtonPrimary(props: IProps) {
  const { children, onClick, gradient = false, ...rest } = props;

  const btnProps = { onClick, gradient, ...rest };

  return <S.Button {...btnProps}>{children}</S.Button>;
}

export default ButtonPrimary;
