import { mode } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/react";
export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "16px",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none",
        },
        _active: {
          boxShadow: "none",
        },
      },
      variants: {
        outline: () => ({
          borderRadius: "16px",
        }),
        brand: (props: SystemStyleObject) => ({
          bg: mode("brand.500", "brand.400")(props),
          color: "white",
          _focus: {
            bg: mode("brand.500", "brand.400")(props),
          },
          _active: {
            bg: mode("brand.500", "brand.400")(props),
          },
          _hover: {
            bg: mode("brand.600", "brand.400")(props),
          },
          _disabled: {
            bg: "gray.300",
            color: "gray.500",
            cursor: "not-allowed",
          },
        }),
        ghost: (props: SystemStyleObject) => ({
          bg: mode("unset", "gray.100")(props),
          color: mode("unset", "navy.1000")(props),
          border:"1px solid #dfdfdf",
          fontWeight:"400",
          _active: {
            bg: mode("unset", "unset")(props),
            color: mode("unset", "navy.1000")(props),
          }
         
         
        }),
        spec1: (props: SystemStyleObject) => ({
          bg: mode("gray.100", "gray.100")(props),
          color: mode("unset", "navy.1000")(props),
          fontSize: { base: "12px", md: "sm" },
          fontWeight:"300",
          padding: { base: "5px", md: "14px" },
          // _focus: {
          //   bg: mode("brand.500", "brand.400")(props),
          // },
          _active: {
            bg: mode("orange.500", "orange.500")(props),
            color: "white",
          },
          _hover: {
            bg: mode(" brandScheme.100", " brandScheme.100")(props),
            color: "white",
          },
          _disabled: {
            bg: "gray.300",
            color: "gray.500",
            cursor: "not-allowed",
          },
        }),
        danger: (props: SystemStyleObject) => ({
          bg: mode("error.300", "error.300")(props),
          color: "white",
          _focus: {
            bg: mode("error.300", "error.300")(props),
          },
          _active: {
            bg: mode("error.400", "error.300")(props),
          },
          _hover: {
            bg: mode("error.500", "error.300")(props),
          },
          _disabled: {
            bg: "gray.300",
            color: "gray.500",
            cursor: "not-allowed",
          },
        }),
      },
    },
  },
};
