import { useState } from 'react';
import './App.css';
// import BackgroundAnimate from './BackgroundAnimate';
import URLShrinker from './URLShrinker';
import Short_Link from './Short_Link';

function App() {
	const [Input, setInput] = useState("");

	return (
		<div className='background'>
			<div className="container">
				<URLShrinker setInput={setInput} />
				
				<Short_Link Input={Input} />
			</div>
		</div>
	);
}

export default App;