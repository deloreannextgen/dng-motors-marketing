import * as React from "react";
import { default as MUIButton, ButtonProps } from "@mui/material/Button";

export default function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return <MUIButton {...rest}>{children}</MUIButton>;
}
