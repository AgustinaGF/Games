import { useEffect, useState } from "react";
import { Typography, Button, Grid, TextField } from "@mui/material";

// Words with 6 letters and no special characters and different starting letters
const WORDS = [
	"abacus",
	"abamps",
	"abased",
	"babies",
	"babble",
	"cabana",
	"gabble",
	"dabbed",
];

export default function WordsPerMinutes() {
	const [word, setWord] = useState(
		() => WORDS[(Math.random() * WORDS.length) | 0]
	);
	const [characterCount, setCharacterCount] = useState(0);
	const [buffer, setBuffer] = useState("");
	const [time, setTime] = useState(0);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (buffer === word) {
			setWord(WORDS[(Math.random() * WORDS.length) | 0]);
			setCharacterCount((characterCount) => characterCount + word.length);
		}
		setBuffer("");
	}

	useEffect(() => {
		if (time !== 0) {
			const timeout = setTimeout(() => setTime(time - 1), 1000);

			return () => clearTimeout(timeout);
		}
	}, [time]);

	return (
		<Grid
			container
			spacing={1}
			display="flex"
			justifyContent="center"
			flexDirection="column"
			alignContent="center"
			sx={{
				height: "500px",
				padding: "1em",
			}}
		>
			<Grid
				item
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="space-evenly"
			>
				{Boolean(time) && (
					<Typography
						variant="h3"
						color={"#33E9FF"}
						sx={{ marginBottom: "1em" }}
					>
						{word}
					</Typography>
				)}
				<Typography variant="h4" fontSize={24} sx={{ marginBottom: "1em" }}>
					Characters typed:{characterCount}
				</Typography>
				<Typography variant="h4" fontSize={24} sx={{ marginBottom: "1em" }}>
					Remaining typed:{time}
				</Typography>
			</Grid>

			{time ? (
				<Grid item>
					<form
						onSubmit={handleSubmit}
						style={{ display: "flex", flexDirection: "row", width: "100%" }}
					>
						<TextField
							value={buffer}
							onChange={(e) => setBuffer(e.target.value)}
							variant="outlined"
							fullWidth
							autoFocus
						/>

						<Button
							variant="contained"
							type="submit"
							sx={{
								height: "55px",
								borderColor: "#33E9FF",
								borderWidth: "2px",
								borderStyle: "solid",
								background: "#001b38",
								color: "#33E9FF",
							}}
						>
							Submit
						</Button>
					</form>
				</Grid>
			) : (
				<Button
					onClick={() => setTime(60)}
					variant="contained"
					sx={{
						height: "50px",
						minWidth: "300px",
						borderColor: "#33E9FF",
						borderWidth: "2px",
						borderStyle: "solid",
						background: "#001b38",
						color: "#33E9FF",
					}}
				>
					Play
				</Button>
			)}
		</Grid>
	);
}
