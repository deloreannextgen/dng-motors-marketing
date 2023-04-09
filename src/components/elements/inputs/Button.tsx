import * as React from "react";
import { default as MUIButton } from "@mui/material/Button";

type MUIButtonType = typeof MUIButton;

interface IButton extends MUIButtonType {
  children: React.ReactNode;
}

export default function Button(props: IButton) {
  const { children, ...rest } = props;
  return <MUIButton {...rest}>{children}</MUIButton>;
}
