import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
	Button,
	TextField,
	Box,
	Collapse,
	Alert,
	IconButton,
} from "@mui/material";

const POKEMONS = [
	"bulbasaur",
	"ivysaur",
	"venusaur",
	"charmander",
	"charmeleon",
	"charizard",
	"squirtle",
	"wartortle",
	"blastoise",
	"caterpie",
	"metapod",
	"butterfree",
	"weedle",
	"kakuna",
	"beedrill",
	"pidgey",
	"pidgeotto",
	"pidgeot",
	"rattata",
	"raticate",
	"spearow",
	"fearow",
	"ekans",
	"arbok",
	"pikachu",
	"raichu",
	"sandshrew",
	"sandslash",
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

type Form = HTMLFormElement & {
	pokemon: HTMLInputElement;
};

export default function Pokemon() {
	const [hasWon, toggleWon] = useState(false);
	const [open, setOpen] = useState(false);
	const [alert, setAlert] = useState("");

	console.log(alert);
	function handleSubmit(event: React.FormEvent<Form>) {
		event.preventDefault();

		const { pokemon } = event.currentTarget;
		if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
			toggleWon(true);
			setOpen(true);
			setAlert("won");
		} else {
			setOpen(true);
			setAlert("lost");
		}
	}

	return (
		<div>
			<>
				{open ? (
					<Box sx={{ width: "100%" }}>
						<Collapse in={open}>
							<Alert
								severity={alert === "won" ? "success" : "error"}
								action={
									<IconButton
										aria-label="close"
										color="inherit"
										size="small"
										onClick={() => {
											setOpen(false);
										}}
									>
										<CloseIcon fontSize="inherit" />
									</IconButton>
								}
								sx={{ mb: 2 }}
							>
								{alert === "won" ? "You Won!!" : "Wrong Answer"}
							</Alert>
						</Collapse>
					</Box>
				) : null}
			</>
			<img
				height={512}
				width={512}
				style={{
					imageRendering: "pixelated",
					filter: hasWon ? "" : "brightness(0) invert(1)",
				}}
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					MATCH + 1
				}.png`}
			/>
			{hasWon ? (
				<Button onClick={() => location.reload()} variant="contained" fullWidth>
					Play Again
				</Button>
			) : (
				<form onSubmit={handleSubmit}>
					<TextField variant="outlined" fullWidth name="pokemon" autoFocus />
					<Button type="submit" variant="contained">
						Submit
					</Button>
				</form>
			)}
		</div>
	);
}
