import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import * as gamesAPI from '../../utilities/games-api';
import AuthPage from '../AuthPage/AuthPage';
import MyCollectionPage from '../MyCollectionPage/MyCollectionPage';
import AllGamesPage from '../AllGamesPage/AllGamesPage';
import GameDetailPage from '../GameDetailPage/GameDetailPage'
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [collection, setCollection] = useState();
  
  useEffect(function() {
    async function getAllGames() {
      const collection = await gamesAPI.getMyGames();
      setCollection(collection);
    }
    getAllGames();
  }, []);

  return (
    <main className="App">
      <Header />
      <NavBar user={user} setUser={setUser}/>
      { user ?
        <>
          <Routes>
            {/* Route components in here */}
            <Route path='/games/mycollection' element={<MyCollectionPage collection={collection} setCollection={setCollection} />} />
            <Route path='/games/all' element={<AllGamesPage collection={collection} setCollection={setCollection} />} />
            <Route
              path='/games/:gameId'
              element={<GameDetailPage collection={collection} setCollection={setCollection} />}
            />
            <Route path='/*' element={<Navigate to="/games/mycollection" />} />
          </Routes>
        </>
        :
        <>
          <About />
          <AuthPage setUser={setUser}/>
        </>
      }
    </main>
  );
}