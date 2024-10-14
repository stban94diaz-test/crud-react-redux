import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Alice Johnsonnnn",
		email: "alice@example.com",
		github: "alice",
	},
	{
		id: "2",
		name: "Bob Smith",
		email: "bob@email.com",
		github: "bob",
	},
	{
		id: "3",
		name: "Charlie Brown",
		email: "charlie@example.com",
		github: "charlie",
	},
];

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			state.push({ id, ...action.payload });
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlready = state.some((user) => user.id === action.payload.id);
			if (!isUserAlready) {
				state.push(action.payload);
			}
		},
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;
