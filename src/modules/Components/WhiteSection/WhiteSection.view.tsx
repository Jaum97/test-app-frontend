import {
  AddUserButton,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  UserButtonText,
} from "./WhiteSection.styles";
import { IProps } from "./WhiteSection.types";

function WhiteSection(props: IProps) {
  const { title, children, onClick } = props;

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {onClick ? (
          <AddUserButton onClick={onClick}>
            <UserButtonText>{"+"}</UserButtonText>
          </AddUserButton>
        ) : null}
      </SectionHeader>
      {children}
    </SectionContainer>
  );
}

export default WhiteSection;
