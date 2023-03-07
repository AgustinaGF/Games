import { Route, Routes } from "react-router-dom";
import Memotest from "./screens/Memotest";
import WordsPerMinutes from "./screens/WordsPerMinutes";
import Home from "./screens/Home/Home";
import Pokemon from "./screens/Pokemon";
import "@fontsource/press-start-2p";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/memotest" element={<Memotest />}></Route>
			<Route path="/wpm" element={<WordsPerMinutes />}></Route>
			<Route path="/pokemon" element={<Pokemon />}></Route>
		</Routes>
	);
}

export default App;
