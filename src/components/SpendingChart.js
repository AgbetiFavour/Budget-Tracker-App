import { useSelector } from "react-redux"
import { Box, useColorModeValue, Text } from "@chakra-ui/react"
import { PieChart, Pie, Cell, Tooltip } from "recharts"

const SpendingChart = () => {
	const transactions = useSelector((state) => state.budget.transactions)

	const data = transactions.reduce((acc, transaction) => {
		const existingCategory = acc.find(
			(item) => item.name === transaction.category
		)
		if (existingCategory) {
			existingCategory.value += transaction.amount
		} else {
			acc.push({ name: transaction.category, value: transaction.amount })
		}
		return acc
	}, [])

	const COLORS = [
		"#0088FE", 
		"#FF8042", 
		"#00C49F", 
		"#FFBB28", 
		"#FF6361", 
		"#6A4C93",
		"#3E4E50", 
		"#D45087", 
		"#98DFEA", 
		"#F97B22", 
		"#FFC0CB", 
	]

	// Dynamic background and text colors for dark mode
	const bgColor = useColorModeValue("white", "gray.800")
	const textColor = useColorModeValue("black", "white")

	return (
		<Box
			bg={bgColor}
			color={textColor}
			p={4}
			rounded="md"
			shadow="md"
			textAlign="center">
			{data.length > 0 ? (
				<PieChart width={400} height={400}>
					<Pie
						data={data}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="50%"
						outerRadius={100}
						fill="#8884d8">
						{data.map((_, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip
						contentStyle={{
							backgroundColor: bgColor,
							color: textColor,
							border: `1px solid ${textColor}`,
						}}
					/>
				</PieChart>
			) : (
				<Text>No transactions available to display.</Text>
			)}
		</Box>
	)
}

export default SpendingChart
