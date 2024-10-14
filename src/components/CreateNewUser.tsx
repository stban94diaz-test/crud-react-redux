import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

export const CreateNewUser = () => {
	const { addUser } = useUserActions();
	const [result, setResult] = useState<"ok" | "ko">();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setResult(undefined);

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		if (
			!formData.get("name") ||
			!formData.get("email") ||
			!formData.get("github")
		) {
			return setResult("ko");
		}

		addUser({
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			github: formData.get("github") as string,
		});
		setResult("ok");
		form.reset();
	};

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>

			<form className="" onSubmit={handleSubmit}>
				<TextInput name="name" placeholder="Aquí el nombre" />
				<TextInput name="email" placeholder="Aquí el email" />
				<TextInput name="github" placeholder="Aquí el usuario de GitHub" />

				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Crear Usuario
					</Button>
					<span>
						{result === "ok" && (
							<Badge color="green">Usuario creado correctamente.</Badge>
						)}
						{result === "ko" && (
							<Badge color="red">Por favor, rellena todos los campos.</Badge>
						)}
					</span>
				</div>
			</form>
		</Card>
	);
};
