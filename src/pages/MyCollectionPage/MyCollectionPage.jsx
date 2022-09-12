import { useState, useEffect } from 'react';
import './MyCollectionPage.css';
import AllGameTiles from '../../components/AllGameTiles/AllGameTiles'
import * as gamesAPI from '../../utilities/games-api';

export default function MyCollectionPage({ collection, setCollection }) {
  
  useEffect(function() {
    async function getAllGames() {
      const collection = await gamesAPI.getMyGames();
      setCollection(collection);
    }
    getAllGames();
  }, []);


  return (
    <div className="my-games-page">
      <h1>My Collection</h1>
      <AllGameTiles collection={collection} setCollection={setCollection} games={collection?.games} />
    </div>
  );
}
