import { useState } from "react"
import {
	Box,
	Heading,
	VStack,
	Text,
	Select,
	Input,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react"
import { useSelector } from "react-redux"

const TransactionHistory = () => {
	const transactions = useSelector((state) => state.budget.transactions)

	const [searchQuery, setSearchQuery] = useState("")
	const [filterCategory, setFilterCategory] = useState("")

	const { colorMode } = useColorMode()

	// Colors based on color mode
	const bgColor = useColorModeValue("white", "gray.800")
	const cardBgColor = useColorModeValue("gray.50", "gray.700")
	const borderColor = useColorModeValue("gray.200", "gray.600")
	const textColor = useColorModeValue("black", "white")

	// Extract unique categories dynamically
	const uniqueCategories = [
		...new Set(transactions.map((transaction) => transaction.category)),
	]

	// Filtered transactions based on search query and selected category
	const filteredTransactions = transactions.filter((transaction) => {
		const matchesCategory =
			filterCategory === "" || transaction.category === filterCategory
		const matchesSearch =
			searchQuery === "" ||
			transaction.title.toLowerCase().includes(searchQuery.toLowerCase())
		return matchesCategory && matchesSearch
	})

	return (
		<Box bg={bgColor} color={textColor} p={4} rounded="md" shadow="md">
			<Heading size="md" mb={4}>
				Transaction History
			</Heading>
			<VStack spacing={4} mb={4}>
				<Input
					placeholder="Search by title"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					bg={cardBgColor}
					color={textColor}
					borderColor={borderColor}
					_focus={{ borderColor: useColorModeValue("blue.500", "blue.300") }}
				/>
				<Select
					placeholder="Filter by category"
					value={filterCategory}
					onChange={(e) => setFilterCategory(e.target.value)}
					bg={cardBgColor}
					color={textColor}
					borderColor={borderColor}
					_focus={{ borderColor: useColorModeValue("blue.500", "blue.300") }}>
					{uniqueCategories.map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</Select>
			</VStack>
			<VStack spacing={4}>
				{filteredTransactions.length > 0 ? (
					filteredTransactions.map((transaction, index) => (
						<Box
							key={index}
							p={4}
							bg={cardBgColor}
							color={textColor}
							rounded="md"
							w="100%"
							border="1px"
							borderColor={borderColor}>
							<Text fontWeight="bold">{transaction.title}</Text>
							<Text>{transaction.category}</Text>
							<Text>#{transaction.amount.toFixed(2)}</Text>
						</Box>
					))
				) : (
					<Text>No transactions found</Text>
				)}
			</VStack>
		</Box>
	)
}

export default TransactionHistory
