import { useState } from "react"

const URLShrinker = ({ setInput }) => {
	const [value, setValue] = useState("");

	const handleClick = () => {
		setInput(value);
		setValue("");
	}

	return (
		<div className="inputContainer">
			<h1>URL <span>Shrinker</span></h1>
			<div>
				<input
					type="text"
					placeholder="Insert Link Here"
					value={value}
					onChange={e => setValue(e.target.value)}	
				/>
				<button onClick={handleClick}>shrink</button>
			</div>
		</div>
	)
}

export default URLShrinker