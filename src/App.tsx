import { Route, Routes } from "react-router-dom";
import Memotest from "./screens/Memotest";
import WordsPerMinutes from "./screens/WordsPerMinutes";
import Pokemon from "./screens/Pokemon";

function App() {
	return (
		<Routes>
			<Route path="/memotest" element={<Memotest />}></Route>
			<Route path="/wpm" element={<WordsPerMinutes />}></Route>
			<Route path="/pokemon" element={<Pokemon />}></Route>
		</Routes>
	);
}

export default App;
