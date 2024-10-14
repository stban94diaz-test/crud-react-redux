import { configureStore, Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { rollbackUser } from "./users/slice";

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
	};

const syncWithDatabaseMiddleware: Middleware = () => (next) => (action) => {
	const { type, payload } = <
		{ type: string; payload: unknown } & (
			| { type: "users/deleteUserById"; payload: { id: string; name: string } }
			| { type: "users/deleteUserById"; payload: string }
		)
	>action;

	// FASE 1
	// console.log(store.getState());

	const previousState = store.getState();

	next(action);
	// FASE 2
	// console.log(store.getState());

	if (type === "users/deleteUserById") {
		const userIdToRemove = payload;
		const userToRemove = previousState.users.find(
			(user) => user.id === userIdToRemove,
		);
		fetch(`https://jsonplaceholder.typicode.commmmm/users/${userIdToRemove}`, {
			method: "DELETE",
		})
			.then((res) => {
				if (res) toast.success(`Usuario ${userIdToRemove} eliminado correcte!`);
			})
			.catch(() => {
				if (userToRemove) store.dispatch(rollbackUser(userToRemove));
				toast.error(
					`Tuvimos un inconveniente al eliminar al usuario ${userIdToRemove}, por favor intente mas tarde`,
				);
			});
	}
};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: (gDM) =>
		gDM().concat(persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
