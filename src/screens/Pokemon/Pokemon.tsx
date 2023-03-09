import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
	Button,
	TextField,
	Box,
	Collapse,
	Alert,
	IconButton,
	Typography,
} from "@mui/material";
import "./Pokemon.css";

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
			<div className="containerBackgroundPokemon">
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="space-evenly"
				>
					<Typography sx={{ marginTop: "2em" }} fontSize={20}>
						{" "}
						GUESS THE POKEMON
					</Typography>
					<img
						height={512}
						width={400}
						className="hiddenPokemon"
						style={{
							imageRendering: "pixelated",
							filter: hasWon ? "" : "brightness(0) invert(0)",
						}}
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
							MATCH + 1
						}.png`}
					/>
					{hasWon ? (
						<Button
							onClick={() => location.reload()}
							variant="contained"
							fullWidth
						>
							Play Again
						</Button>
					) : (
						<form
							onSubmit={handleSubmit}
							style={{
								display: "flex",
								flexDirection: "row",
								width: "100%",
								padding: "2em",
							}}
						>
							<TextField
								variant="outlined"
								fullWidth
								name="pokemon"
								autoFocus
								placeholder="Enter the name"
							/>
							<Button
								type="submit"
								variant="contained"
								sx={{
									height: "55px",
									borderColor: "#33E9FF",
									borderWidth: "2px",
									borderStyle: "solid",
									background: "#001b38",
									color: "#33E9FF",
								}}
							>
								Send
							</Button>
						</form>
					)}
				</Box>
			</div>
		</div>
	);
}
