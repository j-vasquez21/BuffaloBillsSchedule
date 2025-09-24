function Card(props) {
    return (
        <div className="game-card">
            <h2> {props.week} </h2>
            <div className="logos-container">
                <div className="team">
                    <img className="team-icon" src= {props.homeTeamImg} />
                    <p className="team-name"><strong>{ props.homeTeamName }</strong></p>
                </div>
                <p><strong>vs.</strong></p>
                <div className="team">
                    <img className="team-icon" src= {props.awayTeamImg} />
                    <p className="team-name"><strong>{ props.awayTeamName }</strong></p>
                </div>
            </div>
            <div className="game-details">
                <p><strong>Game: </strong>{ props.eventName }</p>
                <p><strong>Date: </strong> { props.date }</p>
                <button>More Details</button>
            </div>
        </div>
    )
}

export default Card;