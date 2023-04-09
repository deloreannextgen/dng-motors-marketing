import * as React from "react";
import { default as MUIBox } from "@mui/material/Box";
import { BoxProps, BoxTypeMap, Theme as MaterialTheme } from "@mui/system";
import { OverridableComponent } from "@mui/material/OverridableComponent";

const Box: OverridableComponent<BoxTypeMap<{}, "div", MaterialTheme>> = (
  props: BoxProps
) => {
  const { children, ...rest } = props;
  return <MUIBox {...rest}>{children}</MUIBox>;
};

export default Box;
