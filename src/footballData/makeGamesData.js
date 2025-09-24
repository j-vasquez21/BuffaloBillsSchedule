import data from './billsSchedule.json' with { type: 'json' };
import { writeFileSync } from 'fs';

const games = [];

const cleanDate = (date) => {
  date = new Date(date);
  return date.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"});
}

for (const event of data.events) {
    let details = {
        date: cleanDate(event.date),
        name: event.name,
        shortName: event.shortName,
        week: event.week.text,
        homeTeam: {
            teamID: event.competitions[0].competitors[0].team.id,
            name: event.competitions[0].competitors[0].team.displayName,
            abbreviation: event.competitions[0].competitors[0].team.abbreviation,
            logo: event.competitions[0].competitors[0].team.logos[0].href
        },
        awayTeam: {
            teamID: event.competitions[0].competitors[1].team.id,
            name: event.competitions[0].competitors[1].team.displayName,
            abbreviation: event.competitions[0].competitors[1].team.abbreviation,
            logo: event.competitions[0].competitors[1].team.logos[0].href
        }
    }

    games.push(details);
}

try {
  writeFileSync("./games.json", JSON.stringify(games, null, 2));
  console.log("JSON object successfully created in the current directory");
} catch (error) {
  console.error("Error writing JSON object to file:", error);
}

