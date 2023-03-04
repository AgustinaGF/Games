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
			justifyContent="center"
			alignItems="center"
			direction="column"
		>
			<Grid item xs={12} sm={6} md={6}>
				{Boolean(time) && <Typography variant="h3">{word}</Typography>}
				<Typography variant="h4">Characters typed:{characterCount}</Typography>
				<Typography variant="h5">Remaining typed:{time}</Typography>
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
							style={{ height: "55px" }}
						>
							Submit
						</Button>
					</form>
				</Grid>
			) : (
				<Grid container spacing={1} justifyContent="center" alignItems="center">
					<Grid item xs={12} sm={6} md={6}>
						<Button onClick={() => setTime(60)} variant="contained" fullWidth>
							Play
						</Button>
					</Grid>
				</Grid>
			)}
		</Grid>
	);
}
