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
import { DeleteIcon, EditIcon } from "./Iconst";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
	{
		id: "1",
		name: "Alice Johnson",
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
	{
		id: "4",
		name: "David Wilson",
		email: "david@webmail.com",
		github: "david",
	},
	{
		id: "5",
		name: "Eve Davis",
		email: "eve@email.com",
		github: "eve",
	},
	{
		id: "6",
		name: "Frank Miller",
		email: "frank@webmail.com",
		github: "frank",
	},
	{
		id: "7",
		name: "Grace Taylor",
		email: "grace@example.com",
		github: "grace",
	},
	{
		id: "8",
		name: "Hannah White",
		email: "hannah@email.com",
		github: "hannah",
	},
	{
		id: "9",
		name: "Ivy Thompson",
		email: "ivy@webmail.com",
		github: "ivy",
	},
	{
		id: "10",
		name: "Jack Anderson",
		email: "jack@example.com",
		github: "jack",
	},
	{
		id: "11",
		name: "Karen Moore",
		email: "karen@example.com",
		github: "karen",
	},
	{
		id: "12",
		name: "Leo Clark",
		email: "leo@email.com",
		github: "leo",
	},
	{
		id: "13",
		name: "Mia Hall",
		email: "mia@webmail.com",
		github: "mia",
	},
	{
		id: "14",
		name: "Nina Lewis",
		email: "nina@email.com",
		github: "nina",
	},
	{
		id: "15",
		name: "Oscar Lee",
		email: "oscar@example.com",
		github: "oscar",
	},
	{
		id: "16",
		name: "Paul Walker",
		email: "paul@webmail.com",
		github: "paul",
	},
	{
		id: "17",
		name: "Quinn Harris",
		email: "quinn@example.com",
		github: "quinn",
	},
	{
		id: "18",
		name: "Rachel Martinez",
		email: "rachel@email.com",
		github: "rachel",
	},
	{
		id: "19",
		name: "Sam Robinson",
		email: "sam@example.com",
		github: "sam",
	},
	{
		id: "20",
		name: "Tina Scott",
		email: "tina@email.com",
		github: "tina",
	},
];

export default function ListOfUsers() {
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
								<button type="button">
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
