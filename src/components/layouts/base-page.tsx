import Box from "@elements/layout/Box";
import { BoxProps } from "@mui/system";

interface BasePage {
  children: React.ReactNode;
  boxProps?: BoxProps;
}

const BasePage = (props: BasePage) => {
  const { children, boxProps } = props;
  return <Box {...boxProps}>{children}</Box>;
};

export default BasePage;
