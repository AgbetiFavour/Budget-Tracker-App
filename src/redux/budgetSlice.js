import { createSlice } from "@reduxjs/toolkit"

const budgetSlice = createSlice({
	name: "budget",
	initialState: { transactions: [] },
	reducers: {
		addTransaction: (state, action) => {
			state.transactions.push(action.payload)
		},
	},
})

export const { addTransaction } = budgetSlice.actions
export default budgetSlice.reducer
