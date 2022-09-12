import { useState, useEffect } from 'react';
import './AllGamesPage.css';
import AllGameTiles from '../../components/AllGameTiles/AllGameTiles'
import SearchForm from '../../components/SearchForm/SearchForm'
import * as gamesAPI from '../../utilities/games-api';

export default function AllGamesPage({ collection, setCollection }) {
  const [games, setGames] = useState([]);

  useEffect(function() {
    async function getGames() {
      const games = await gamesAPI.getAll();
      const collection = await gamesAPI.getMyGames();
      setGames(games);
      setCollection(collection);
    }
    getGames();
  }, [setCollection]);

  return (
    <div className="all-games-page">
      <h1>All Games</h1>
      <SearchForm games={games} setGames={setGames}/>
      <AllGameTiles games={games} collection={collection} setCollection={setCollection}/>
    </div>
  );
}
