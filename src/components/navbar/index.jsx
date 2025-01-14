import { Avatar, HStack, Stack, Text, useColorMode } from "@chakra-ui/react"
import { GoBell } from "react-icons/go"

const NavBar = () => {
	const { colorMode } = useColorMode()
	const isDarkMode = colorMode !== "light"

	return (
		<HStack
			justifyContent="space-between"
			pr={["10px", "20px"]}
			pl={["1px", "30px"]}
			py={["5px", "5px"]}
			w="100%"
			bg="transparent">
			<Text fontSize={{ base: "18px", md: "28px" }} color="#373B47">
				Budget Tracker App
			</Text>

			<HStack spacing="15px">
				<HStack
					bg={isDarkMode ? "navy.1000" : "white"}
					borderRadius={["5px", "20px"]}
					h="50px"
					w="auto"
					justifyContent="center"
					px="15px">
					<GoBell />
				</HStack>

				<HStack
					bg={isDarkMode ? "navy.1000" : "white"}
					borderRadius={["5px", "20px"]}
					h="50px"
					// w="auto"
					justifyContent="center"
					px="15px">
					<Avatar
						size="sm"
						bg="#003EFF"
						color="secondaryGray.1000"
						name=" FORTUNAE IT Solutions"
						src="https://bit.ly/broken-link"
					/>
				</HStack>
			</HStack>
		</HStack>
	)
}

export default NavBar
