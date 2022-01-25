import { VFC, memo } from "react";
import { Header } from "../oganisms/Header";

export const HeaderLayout: VFC = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
