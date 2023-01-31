import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

const Short_Link = ({ Input }) => {
	const [ShortLink, setShortLink] = useState("");
	const [copied, setCopied] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchData = async () => {
		try {
			setLoading(true);
			const res = await axios(`https://api.shrtco.de/v2/shorten?url=${Input}`);
			setShortLink(res.data.result.full_short_link);
		}
		catch(err) {setError(err);}
		finally {setLoading(false);}
	}

	useEffect(() => {if(Input.length) {fetchData();}}, [Input]);
	useEffect(() => {const timer = setTimeout(() => {setCopied(false);}, 1000);return () => clearTimeout(timer);}, [copied]);

	if(loading) {return <p className="noData">Loading...</p>}
	if(error) {return <p className="noData">Error Occured</p>}


	return (
		<>{ShortLink && (<div className="result"><p>{ShortLink}</p>
			<CopyToClipboard text={ShortLink} onCopy={() => setCopied(true)}>
				<button className={copied ? "copied" : ""}>Copy</button>
			</CopyToClipboard>
		</div>)}</>
	)
}

export default Short_Link