import React from "react"
import {
	Box,
	Switch,
	Heading,
	VStack,
	HStack,
	Text,
	IconButton,
	useColorMode,
	Button,
} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const Settings = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box
			bg={colorMode === "light" ? "white" : "navy.900"}
			color={colorMode === "light" ? "black" : "white"}
			p={6}
			rounded="md"
			shadow="md">
			<Heading size="lg" mb={6}>
				Settings
			</Heading>
			<VStack spacing={6}>
				<HStack justify="space-between" w="100%">
					<Text>Enable Dark Mode</Text>
					<IconButton
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
						onClick={toggleColorMode}
						aria-label="Toggle Dark Mode"
					/>
				</HStack>

				<HStack justify="space-between" w="100%">
					<Text>Notifications</Text>
					<Switch colorScheme="blue" />
				</HStack>

				<HStack justify="space-between" w="100%">
					<Text>Enable Auto-Sync</Text>
					<Switch colorScheme="green" />
				</HStack>

				<HStack justify="space-between" w="100%">
					<Text>Language</Text>
					<Button size="sm" colorScheme="blue">
						English
					</Button>
				</HStack>

				{/* <HStack justify="space-between" w="100%">
					<Text>Reset App Data</Text>
					<Button size="sm" colorScheme="red">
						Reset
					</Button> */}
				{/* </HStack> */}
			</VStack>
		</Box>
	)
}

export default Settings
