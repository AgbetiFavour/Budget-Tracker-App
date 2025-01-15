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
	Text,
	useColorModeValue,
} from "@chakra-ui/react"

const AddTransactionForm = () => {
	const bgColor = useColorModeValue("white", "gray.800")
	const textColor = useColorModeValue("black", "white")

	const [formData, setFormData] = useState({
		title: "",
		amount: "",
		category: "Income",
	})
	const [errors, setErrors] = useState({})
	const dispatch = useDispatch()

	const validateForm = () => {
		let tempErrors = {}
		if (!formData.title.trim()) tempErrors.title = "Title is required"
		if (!formData.amount.trim()) {
			tempErrors.amount = "Amount is required"
		} else if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
			tempErrors.amount = "Amount must be a positive number"
		}
		setErrors(tempErrors)
		return Object.keys(tempErrors).length === 0
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (validateForm()) {
			dispatch(
				addTransaction({ ...formData, amount: parseFloat(formData.amount) })
			)
			setFormData({ title: "", amount: "", category: "Income" })
			setErrors({})
		}
	}

	return (
		<Box bg={bgColor} color={textColor} p={4} rounded="md" shadow="md">
			<form onSubmit={handleSubmit}>
				<VStack spacing={4}>
					<FormControl isInvalid={errors.title}>
						<FormLabel>Title</FormLabel>
						<Input
							placeholder="e.g., Salary"
							color={textColor}
							value={formData.title}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, title: e.target.value }))
							}
						/>
						{errors.title && (
							<Text color="red.500" fontSize="sm">
								{errors.title}
							</Text>
						)}
					</FormControl>
					<FormControl isInvalid={errors.amount}>
						<FormLabel>Amount</FormLabel>
						<Input
							color={textColor}
							type="number"
							placeholder="e.g., 500"
							value={formData.amount}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, amount: e.target.value }))
							}
						/>
						{errors.amount && (
							<Text color="red.500" fontSize="sm">
								{errors.amount}
							</Text>
						)}
					</FormControl>
					<FormControl>
						<FormLabel>Category</FormLabel>
						<Select
							color={textColor}
							value={formData.category}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, category: e.target.value }))
							}>
							<option value="Income">Income</option>
							<option value="Expense">Expense</option>
							<option value="Groceries">Groceries</option>
							<option value="Rent">Rent</option>
							<option value="Utilities">Utilities</option>
							<option value="Transportation">Transportation</option>
							<option value="Entertainment">Entertainment</option>
							<option value="Healthcare">Healthcare</option>
							<option value="Savings">Savings</option>
							<option value="Education">Education</option>
							<option value="Miscellaneous">Miscellaneous</option>
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
