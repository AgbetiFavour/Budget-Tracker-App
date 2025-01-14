import { Box, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { PieChart, Pie, Cell, Legend } from "recharts"

const BudgetOverview = () => {
	const transactions = useSelector((state) => state.budget.transactions)
	const totalIncome = transactions
		.filter((t) => t.category === "Income")
		.reduce((sum, t) => sum + t.amount, 0)
	const totalExpenses = transactions
		.filter((t) => t.category === "Expense")
		.reduce((sum, t) => sum + t.amount, 0)
	const data = [
		{ name: "Income", value: totalIncome },
		{ name: "Expense", value: totalExpenses },
	]
	const colors = ["#4caf50", "#f44336"]

	// Dynamic color values for dark mode
	const bgColor = useColorModeValue("white", "gray.800")
	const textColor = useColorModeValue("black", "white")
	const borderColor = useColorModeValue("gray.200", "gray.600")

	return (
		<Box bg={bgColor} color={textColor} p={4} rounded="md" shadow="md">
			<Heading size="md" mb={4}>
				Budget Overview
			</Heading>
			<VStack spacing={4}>
				<Text>Total Income: #{totalIncome.toFixed(2)}</Text>
				<Text>Total Expenses: #{totalExpenses.toFixed(2)}</Text>
				<Text>
					Remaining Balance: #{(totalIncome - totalExpenses).toFixed(2)}
				</Text>
				<PieChart width={400} height={400}>
					<Pie
						data={data}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="50%"
						outerRadius={100}
						fill="#8884d8"
						label>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={colors[index]} />
						))}
					</Pie>
					<Legend />
				</PieChart>
			</VStack>
		</Box>
	)
}

export default BudgetOverview
