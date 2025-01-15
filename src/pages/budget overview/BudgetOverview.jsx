import { Box, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { PieChart, Pie, Cell, Legend } from "recharts"

const BudgetOverview = () => {
	const transactions = useSelector((state) => state.budget.transactions)

	// Calculate total values for each category
	const categoryTotals = transactions.reduce((acc, transaction) => {
		acc[transaction.category] =
			(acc[transaction.category] || 0) + transaction.amount
		return acc
	}, {})

	// Transform totals into an array for the pie chart
	const data = Object.entries(categoryTotals).map(([name, value]) => ({
		name,
		value,
	}))

	// Colors for each category
	const colors = [
		"#4caf50", 
		"#f44336", 
		"#3f51b5", 
		"#ff9800", 
		"#9c27b0", 
		"#607d8b", 
		"#ff5722", 
		"#8bc34a", 
		"#795548", 
		"#2196f3", 
		"#e91e63", 
	]

	// Dynamic color values for dark mode
	const bgColor = useColorModeValue("white", "gray.800")
	const textColor = useColorModeValue("black", "white")
	const borderColor = useColorModeValue("gray.200", "gray.600")

	// Calculate remaining balance
	const totalIncome = categoryTotals["Income"] || 0
	const totalExpenses =
		Object.entries(categoryTotals)
			.filter(([category]) => category !== "Income")
			.reduce((sum, [, value]) => sum + value, 0) || 0
	const remainingBalance = totalIncome - totalExpenses

	return (
		<Box bg={bgColor} color={textColor} p={4} rounded="md" shadow="md">
			<Heading size="md" mb={4}>
				Budget Overview
			</Heading>
			<VStack spacing={4}>
				<Text>Total Income: #{totalIncome.toFixed(2)}</Text>
				<Text>Total Expenses: #{totalExpenses.toFixed(2)}</Text>
				<Text>Remaining Balance: #{remainingBalance.toFixed(2)}</Text>
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
							<Cell
								key={`cell-${index}`}
								fill={colors[index % colors.length]}
							/>
						))}
					</Pie>
					<Legend />
				</PieChart>
			</VStack>
		</Box>
	)
}

export default BudgetOverview
