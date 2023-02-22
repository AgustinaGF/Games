import { ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";

const IMAGES = [
	"https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
	"https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
	"https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor",
	"https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor",
	"https://icongr.am/devicon/docker-original-wordmark.svg?size=128&color=currentColor",
	"https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
	"https://icongr.am/devicon/vuejs-original.svg?size=128&color=currentColor",
	"https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
	"https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
	"https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
]
	.flatMap((image) => [`a|${image}`, `b|${image}`])
	.sort(() => Math.random() - 0.5);

export default function Memotest() {
	const [guessed, setGuesssed] = useState<string[]>([]);
	const [select, setSelected] = useState<string[]>([]);

	useEffect(() => {
		if (select.length == 2) {
			if (select[0] === select[1]) {
				setGuesssed((guessed) => guessed.concat(select));
			}
			setTimeout(() => setSelected([]), 1000);
		}
	}, [select]);

	return (
		<ImageList sx={{ width: 900, maxHeight: 900 }} cols={5} gap={20}>
			{IMAGES.map((image) => {
				const [, url] = image.split("|");
				return (
					<ImageListItem
						onClick={() =>
							select.length < 2 && setSelected((select) => select.concat(image))
						}
						key={url}
						style={{
							cursor: "pointer",
							padding: 12,
							border: "1px solid #555",
							borderRadius: 12,
						}}
					>
						{select.includes(image) || guessed.includes(image) ? (
							<img alt="icon" src={url} />
						) : (
							<img
								key={url}
								alt="icon"
								src={
									"https://icongr.am/clarity/search.svg?size=128&color=currentColor"
								}
							/>
						)}
					</ImageListItem>
				);
			})}
		</ImageList>
	);
}
