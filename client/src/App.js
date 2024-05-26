import React, { useState, useEffect } from "react";
// https://www.youtube.com/watch?v=7LNl2JlZKHA- this was a tutorial from this channel
function App() {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		fetch("/members")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				console.log(data);
			});
	}, []);

	return (
		<div>
			{typeof data.members === "undefined" ? (
				<p>Loading...</p>
			) : (
				data.members.map((member, i) => <p key={i}>{member}</p>)
			)}
		</div>
	);
}

export default App;
