import { useState, useEffect } from "react"
import axios from "axios"
import { Box, Text, Spinner, useColorModeValue } from "@chakra-ui/react"

const WeatherWidget = () => {
	const [weather, setWeather] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=9e6b03f010f19709dd3af821a01e66e4`
				)
				setWeather(response.data)
			} catch (error) {
				console.error("Error fetching weather:", error)
			} finally {
				setLoading(false)
			}
		}

		fetchWeather()
	}, [])

	const bgColor = useColorModeValue("white", "gray.800")
		const textColor = useColorModeValue("black", "white")
	

	return (
		<Box bg={bgColor} color={textColor} p={4} rounded="md" shadow="md">
			{loading ? (
				<Spinner />
			) : weather ? (
				<>
					<Text fontSize="lg" fontWeight="bold">
						{weather.name}
					</Text>
					<Text>{Math.round(weather.main.temp - 273.15)}°C</Text>
					<Text>{weather.weather[0].description}</Text>
				</>
			) : (
				<Text>Error loading weather</Text>
			)}
		</Box>
	)
}

export default WeatherWidget
