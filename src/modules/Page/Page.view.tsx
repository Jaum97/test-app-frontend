import React, { Fragment } from "react";

import { Header } from "./Header";
import S from "./Page.styles";

function Page({ children }: { children: JSX.Element }) {
  return (
    <Fragment>
      <Header />
      <S.Main>{children}</S.Main>
      <S.Footer>2021 - All rights reserved</S.Footer>
    </Fragment>
  );
}

export default Page;
