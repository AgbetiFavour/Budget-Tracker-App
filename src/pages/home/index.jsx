import {
	useColorMode,
	Box,
	Image,
	Text,
	HStack,
	Button,
	VStack,
  Stack,
  Avatar,
  GridItem,
  Grid,
} from "@chakra-ui/react"
import dash from "../../assets/category.png"
import money from "../../assets/money.png"
import user from "../../assets/profile-2user.png"
import setting from "../../assets/setting.png"
import profile from "../../assets/Profile.png"
import AddTransactionForm from "../../components/AddTransactionForm"
import SpendingChart from "../../components/ SpendingChart"
import WeatherWidget from "../../components/WeatherWidget"

const Home = () => {
	const { colorMode } = useColorMode()
	const isDarkMode = colorMode !== "light"

	

	return (
		<>
			{/* <Layout> */}
			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
				}}
				gap={4}>
				<GridItem>
					<AddTransactionForm />
				</GridItem>
				<GridItem>
					<WeatherWidget />
				</GridItem>
			</Grid>
			<Box mt={4}>
				<SpendingChart />
			</Box>
			{/* </Layout> */}
		</>
	)
}

export default Home

