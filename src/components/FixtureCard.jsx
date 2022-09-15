import React, { useEffect } from "react";

const FixtureCard = (fixture) => {
	const mainObj = fixture.fixture;
	const homeTeam = mainObj.teams.home;
	const awayTeam = mainObj.teams.away;
	console.log(mainObj);
	return (
		<div className="fixture">
			<div className="fixture__clubs-container">
				<div className="fixture__logo-and-name">
					<img className="fixture__logo" src={homeTeam.logo} alt="" />
					<h2>{homeTeam.name}</h2>
				</div>
				<div className="fixture__score-container">
					<p>{mainObj.score.fulltime.home}</p>
					<p>{"-"}</p>
					<p>{mainObj.score.fulltime.away}</p>
				</div>
				<div className="fixture__logo-and-name">
					<img className="fixture__logo" src={awayTeam.logo} alt="" />
					<h2>{awayTeam.name}</h2>
				</div>
			</div>
			<ul className="fixture__facts-container">
				<li>
					<b>Competition:</b> {mainObj.league.name}
				</li>
				<li>
					<b>Venue:</b> {mainObj.fixture.venue.name}
				</li>
				<li>
					<b>Referee:</b> {mainObj.fixture.referee}
				</li>
			</ul>
		</div>
	);
};

export default FixtureCard;
