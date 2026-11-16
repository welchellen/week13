
import GameItem from "./Gameitem";

function App() {
  const games = [
    { id: 1, title: "The Legend of Zelda", genre: "Adventure" },
    { id: 2, title: "Elden Ring", genre: "RPG" },
    { id: 3, title: "Stardew Valley", genre: "Simulation" }
  ];

  return (
    <div>
      <h1>My Digital Game Vault</h1>

      {games.map(game => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
}

export default App;
