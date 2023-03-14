import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "./Home.css";
export default function Home() {
	return (
		<>
			<Box
				sx={{
					height: "80px",
					borderColor: "#33E9FF",
					borderWidth: "2px",
					borderStyle: "solid",
					background: "#001b38",
					PaddingTop: "6em",
				}}
				display="flex"
				flexDirection="row"
				alignItems="center"
				justifyContent="center"
			>
				<Typography className="title" fontSize={28}>
					SUPER ARCADE
				</Typography>
			</Box>
			<div className="containerBackground">
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<Typography fontSize={18} sx={{ marginBottom: "2em" }}>
						SELECT GAME
					</Typography>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-around"
						sx={{ height: "200px" }}
					>
						<Link to={"/memotest"} className="link">
							<Button
								variant="outlined"
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
								Memotest
							</Button>
						</Link>
						<Link to={"/wpm"} className="link">
							<Button
								variant="outlined"
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
								Word Per Minutes
							</Button>
						</Link>
						<Link to={"/pokemon"} className="link">
							<Button
								variant="outlined"
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
								Guess Pokemon
							</Button>
						</Link>
					</Box>
				</Box>
			</div>
			<Grid
				container
				justifyContent={"space-between"}
				alignItems={"center"}
				sx={{ marginTop: "1em" }}
			>
				<Grid
					item
					alignItems={"center"}
					justifyContent="center"
					sx={{ fontSize: "10px", marginLeft: "5px" }}
				>
					<img
						src="https://icongr.am/fontawesome/copyright.svg?size=12&color=FFFFFF"
						alt="icon"
						style={{ marginRight: "5px" }}
					/>
					Agustina Gomez Fernandez
				</Grid>
				<Grid item justifyContent={"space-around"}>
					<Link to={"https://github.com/AgustinaGF"}>
						<img
							src="https://icongr.am/devicon/github-original.svg?size=30&color=0F0F0F"
							alt="github"
							style={{ marginRight: "10px" }}
						></img>
					</Link>
					<Link to={"https://www.linkedin.com/in/agustina-gomez-fernandez/"}>
						<img
							src="https://icongr.am/devicon/linkedin-plain.svg?size=30&color=currentColor"
							alt="linkedink"
							style={{ marginRight: "5px" }}
						></img>
					</Link>
				</Grid>
			</Grid>
		</>
	);
}
