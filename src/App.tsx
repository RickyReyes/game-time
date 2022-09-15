import { useState, useEffect } from "react";
import FixtureCard from "./components/FixtureCard";
import "./App.css";

function App() {
	type Fixture = {
		fixture: {
			date: string;
			id: number;
			periods: Object;
			referee: string;
			status: Object;
			timestamp: string;
			timezone: string;
			venue: Object;
		};
		goals: Object;
		league: Object;
	};
	const [fixtures, setFixtures] = useState<Fixture[]>([]);
	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key":
					"4a58be7c3dmshe6f2f43a92d673bp1697b1jsn69881870082a",
				"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
			},
		};

		fetch(
			"https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2020&team=33",
			options
		)
			.then((response) => response.json())
			.then((response) => setFixtures(response.response))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="App">
			<h1>Game Time ℝ®</h1>
			<div className="fixtures-container">
				{fixtures.map((fixture: Fixture) => {
					return (
						<FixtureCard
							key={fixture.fixture.id}
							fixture={fixture}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
