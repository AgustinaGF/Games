import { Box, Button } from "@mui/material";
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
				<h2 className="title">SUPER ARCADE</h2>
			</Box>
			<div className="containerBackground">
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<h3 className="subtitle">SELECT GAME</h3>
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
								Guees Pokemon
							</Button>
						</Link>
					</Box>
				</Box>
			</div>
		</>
	);
}
