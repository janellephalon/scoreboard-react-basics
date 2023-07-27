const Header = (props) => {
  console.log(props)
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        { props.name }
      </span>

      {/* Player passes a counter component a prop for the score */}
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [score, setScore] = React.useState(0);
  // state= {
  //   score: 0
  // };

  const incrementScore = () => {
    setScore(prevScore => prevScore + 1);
    // this.setState( prevState => ({
    //     score: prevState.score + 1
    // }));
  }

  const decrementScore = () => {
    setScore(prevScore => prevScore - 1);
    // this.setState( prevState => ({
    //     score: prevState.score - 1
    // }));
  }

    return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => decrementScore()}> - </button>
          <span className="counter-score">{ score } </span>
          <button className="counter-action increment" onClick={() => incrementScore()}> + </button>
        </div>
      );
    }

const App = () => {
  const [players, setPlayers] = React.useState([
    {
      name: "Guil",
      id: 1
    },
    {
      name: "Janelle",
      id: 2
    },
    {
      name: "Max",
      id: 3
    },
    {
      name: "Jane",
      id: 4
    }
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }


    return (
      <div className="scoreboard">
        <Header title="scoreboard" totalPlayers={players.length} />

        {/* Players List */}
        {players.map( player =>
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={handleRemovePlayer}
            />
        )}
      </div>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
