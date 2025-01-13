
import { extendTheme,} from "@chakra-ui/react";

import { breakpoints } from "./foundations/breakpoints";
import { globalStyles } from "./styles";
import { buttonStyles } from "./foundations/button";

export default extendTheme(
  { breakpoints },
  globalStyles,
  buttonStyles
);

