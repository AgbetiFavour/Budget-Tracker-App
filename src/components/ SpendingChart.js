import { useSelector } from "react-redux"
import { Box } from "@chakra-ui/react"
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

	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

	return (
		<Box bg="white" p={4} rounded="md" shadow="md">
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
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip />
			</PieChart>
		</Box>
	)
}

export default SpendingChart
