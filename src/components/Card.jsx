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
            <div>
                <h3>{ props.eventName }</h3>
                <h3>{ props.date }</h3>
                <button>More Details</button>
            </div>
        </div>
    )
}

export default Card;