import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 100%; */
  @media (max-width: 560px) {
    width: auto;
  }
`;

export const TransparentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;
