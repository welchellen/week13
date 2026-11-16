
import GameItem from "./Gameitem";
import { RAW_GAMES, getFavoriteGames } from "./week13";

function App() {
  const favoriteGames = getFavoriteGames(RAW_GAMES);

  return (
    <div>
      <h1>My Digital Game Vault</h1>

      {favoriteGames.map(game => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
}

export default App;

