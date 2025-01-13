import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MenuListItems = ({ icon, title, isaCtive, link = "", onClick }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode !== "light";
  return (
    <Link
      style={{ cursor: "pointer", width: "100%" }}
      onClick={onClick || undefined}
      to={link}
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        h={["25px", "40px"]}
        w={["100%"]}
        borderColor={"brand.500"}
        
      >
        <Box mr={["8%"]}>{icon?.()}</Box>
        <Text
          color={
            !isaCtive
              ? "secondaryGray.500"
              : isDarkMode
              ? "brand.1000"
              : "secondaryGray.900"
          }
        >
          {title}
        </Text>
      </Flex>
    </Link>
  );
};

export default MenuListItems;
