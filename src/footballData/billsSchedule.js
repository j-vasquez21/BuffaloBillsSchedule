import fs from "fs";

const url = 'https://nfl-football-api.p.rapidapi.com/nfl-team-schedule?id=2';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '259bd34a2fmshb08ac9ceca920a2p1c406ejsn7597f3a57925',
		'x-rapidapi-host': 'nfl-football-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	fs.writeFileSync("billsSchedule.json", JSON.stringify(result, null, 2));
    console.log("✅ Data saved to billsSchedule.json");
} catch (error) {
	console.error(error);
}