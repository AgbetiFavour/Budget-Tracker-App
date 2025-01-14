import { useColorMode, Box, GridItem, Grid } from "@chakra-ui/react"
import AddTransactionForm from "../../components/AddTransactionForm"
import SpendingChart from "../../components/SpendingChart"
import WeatherWidget from "../../components/WeatherWidget"

const Home = () => {
	const { colorMode } = useColorMode()
	const isDarkMode = colorMode !== "light"

	// Colors for dark and light modes
	const bgColor = isDarkMode ? "gray.800" : "white"
	const textColor = isDarkMode ? "white" : "black"

	return (
		<>
			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
				}}
				gap={4}
				bg={bgColor}
				color={textColor}
				p={4}
				rounded="md">
				<GridItem>
					<AddTransactionForm />
				</GridItem>
				<GridItem>
					<WeatherWidget />
				</GridItem>
			</Grid>
			<Box mt={4} bg={bgColor} color={textColor} p={4} rounded="md">
				<SpendingChart />
			</Box>
		</>
	)
}

export default Home
