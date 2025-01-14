import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { urlRoutes } from "../../routes/urlRoutes";
import { AiOutlineLogout } from "react-icons/ai";
import MenuListItems from "../menuListItems";
import { BiCategory } from "react-icons/bi";
import { TbSettings2 } from "react-icons/tb";

const sideMenuItems = [
	{
		title: "Home",
		icon: <IoHome color={"#dfdfdf"} />,
		link: urlRoutes.home,
	},
	{
		title: "Overview",
		icon: <BiCategory color={"#dfdfdf"} />,
		link: urlRoutes.budgetOverview,
	},
	{
		title: "Transaction History ",
		icon: <IoHome color={"#dfdfdf"} />,
		link: urlRoutes.transactionHistory,
	},

	{
		title: "Settings",
		icon: <TbSettings2 color={"#dfdfdf"} />,
		link: urlRoutes.setting,
	},
]

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const isDrawerOpenOnDesktop = useBreakpointValue({ base: false, md: true });
  const location = useLocation();

  const isDarkMode = colorMode !== "light";
  const toggleSidebar = () => {
    isOpen ? onClose() : onOpen();
  };
  const Checkcurrent = (link) => {
    const locationArr = location?.pathname?.split("/") || [];

    if (link) {
      if (link === "/" && location?.pathname === "/") {
        return true;
      }
      const currentRoute = link?.split("/")?.[1];
      if (currentRoute && locationArr.includes(currentRoute)) return true;
    } else {
      return false;
    }
  };
  const handleLinkClick = () => {
    if (isOpen) {
      onClose(); // Close the sidebar on mobile when a link is clicked
    }
  };

  const handleLogout = () => {};
  return (
    <Flex>
      <Box
        as="nav"
        position="fixed"
        left={0}
        top={0}
        h="100vh"
        w={{ base: isOpen ? "285px" : "0", md: "285px" }} // Responsive width
        bg={isDarkMode ? "navy.900" : "secondaryGray.1000"}
        color="white"
        transition="width 0.2s"
        overflow="hidden"
        zIndex="999"
      >
        <Flex mb="32px" pl="20%" alignItems={"cemter"}>
          <Box></Box>
        </Flex>

        <Flex
          pl={"20%"}
          w="100%"
          direction="column"
          alignItems="start"
          h="full"
        >
          {sideMenuItems.map((item) => (
            <MenuListItems
              onClick={handleLinkClick}
              link={item.link}
              isaCtive={Checkcurrent(item.link)}
              icon={() => item.icon}
              title={item.title}
            />
          ))}
          <MenuListItems
            link={""}
            isaCtive={false}
            onClick={handleLogout}
            icon={() => <AiOutlineLogout color="#dfdfdf" />}
            // title={"Log Out"}
          />
        </Flex>
      </Box>

      {/* Main Content */}

      {!isDrawerOpenOnDesktop && (
        <Box
          ml={{ base: isOpen ? "200px" : "0", md: "200px" }}
          w="full"
          p={4}
          transition="margin-left 0.2s"
        >
          {/* Mobile Menu Button */}
          <IconButton
            aria-label="Open Menu"
            icon={<FiMenu />}
            onClick={toggleSidebar}
            display={{ base: isOpen ? "none" : "block", md: "none" }}
            position="fixed"
            top={4}
            left={2}
            zIndex="990"
          />
        </Box>
      )}
    </Flex>
  );
};

export default Sidebar;
