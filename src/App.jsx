import Card from "./components/Card";
import games from './footballData/games.json' with { type: 'json' };

function App() {
  return (
    <div>
      <div className="header">
        <img className= "team-icon" src= {games[0].homeTeam.logo}/>
        <h1>Buffalo Bills 2025 Games</h1>
      </div>
      <div className="games-container">
        <Card week={games[0].week} homeTeamImg={games[0].homeTeam.logo} homeTeamName={games[0].homeTeam.name} awayTeamImg={games[0].awayTeam.logo} awayTeamName={games[0].awayTeam.name} eventName={games[0].name} date={games[0].date}></Card>
        <Card week={games[1].week} homeTeamImg={games[1].homeTeam.logo} homeTeamName={games[1].homeTeam.name} awayTeamImg={games[1].awayTeam.logo} awayTeamName={games[1].awayTeam.name} eventName={games[1].name} date={games[1].date}></Card>
        <Card week={games[2].week} homeTeamImg={games[2].homeTeam.logo} homeTeamName={games[2].homeTeam.name} awayTeamImg={games[2].awayTeam.logo} awayTeamName={games[2].awayTeam.name} eventName={games[2].name} date={games[2].date}></Card>
        <Card week={games[3].week} homeTeamImg={games[3].homeTeam.logo} homeTeamName={games[3].homeTeam.name} awayTeamImg={games[3].awayTeam.logo} awayTeamName={games[3].awayTeam.name} eventName={games[3].name} date={games[3].date}></Card>
        <Card week={games[4].week} homeTeamImg={games[4].homeTeam.logo} homeTeamName={games[4].homeTeam.name} awayTeamImg={games[4].awayTeam.logo} awayTeamName={games[4].awayTeam.name} eventName={games[4].name} date={games[4].date}></Card>
        <Card week={games[5].week} homeTeamImg={games[5].homeTeam.logo} homeTeamName={games[5].homeTeam.name} awayTeamImg={games[5].awayTeam.logo} awayTeamName={games[5].awayTeam.name} eventName={games[5].name} date={games[5].date}></Card>
        <Card week={games[6].week} homeTeamImg={games[6].homeTeam.logo} homeTeamName={games[6].homeTeam.name} awayTeamImg={games[6].awayTeam.logo} awayTeamName={games[6].awayTeam.name} eventName={games[6].name} date={games[6].date}></Card>
        <Card week={games[7].week} homeTeamImg={games[7].homeTeam.logo} homeTeamName={games[7].homeTeam.name} awayTeamImg={games[7].awayTeam.logo} awayTeamName={games[7].awayTeam.name} eventName={games[7].name} date={games[7].date}></Card>
        <Card week={games[8].week} homeTeamImg={games[8].homeTeam.logo} homeTeamName={games[8].homeTeam.name} awayTeamImg={games[8].awayTeam.logo} awayTeamName={games[8].awayTeam.name} eventName={games[8].name} date={games[8].date}></Card>
        <Card week={games[9].week} homeTeamImg={games[9].homeTeam.logo} homeTeamName={games[9].homeTeam.name} awayTeamImg={games[9].awayTeam.logo} awayTeamName={games[9].awayTeam.name} eventName={games[9].name} date={games[9].date}></Card>
      </div>
    </div>
  )
}

export default App
