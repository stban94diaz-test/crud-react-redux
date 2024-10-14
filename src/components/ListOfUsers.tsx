import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";
import { useAppSelector } from "../hooks/store";
import { useUserActions } from "../hooks/useUserActions";
import { DeleteIcon, EditIcon } from "./Icons";

export default function ListOfUsers() {
	const users = useAppSelector((state) => state.users);
	const { removeUser } = useUserActions();

	return (
		<Card>
			<Title>
				Usuarios <Badge style={{ marginLeft: "8px" }}>{users.length}</Badge>
			</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell style={{ display: "flex", alignItems: "center" }}>
								<img
									style={{
										width: "32px",
										height: "32px",
										borderRadius: "50%",
										marginRight: "8px",
									}}
									src={`https://unavatar.io/github/${item.github}`}
									alt={item.name}
								/>
								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>
								<button type="button">
									<EditIcon />
								</button>
								<button type="button" onClick={() => removeUser(item.id)}>
									<DeleteIcon />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
