import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTransaction } from "../redux/budgetSlice"
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Select,
	VStack,
} from "@chakra-ui/react"

const AddTransactionForm = () => {
	const [formData, setFormData] = useState({
		title: "",
		amount: "",
		category: "Income",
	})
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(
			addTransaction({ ...formData, amount: parseFloat(formData.amount) })
		)
		setFormData({ title: "", amount: "", category: "Income" })
	}

	return (
		<Box bg="white" p={4} rounded="md" shadow="md">
			<form onSubmit={handleSubmit}>
				<VStack spacing={4}>
					<FormControl>
						<FormLabel>Title</FormLabel>
						<Input
							placeholder="e.g., Salary"
							value={formData.title}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, title: e.target.value }))
							}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Amount</FormLabel>
						<Input
							type="number"
							placeholder="e.g., 500"
							value={formData.amount}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, amount: e.target.value }))
							}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Category</FormLabel>
						<Select
							value={formData.category}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, category: e.target.value }))
							}>
							<option value="Income">Income</option>
							<option value="Expense">Expense</option>
						</Select>
					</FormControl>
					<Button colorScheme="blue" type="submit">
						Add Transaction
					</Button>
				</VStack>
			</form>
		</Box>
	)
}

export default AddTransactionForm
