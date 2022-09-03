import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import MyGamesPage from '../MyGamesPage/MyGamesPage';
import GamesPage from '../GamesPage/GamesPage';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header'
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <Header />
      <NavBar user={user} setUser={setUser}/>
      { user ?
        <>
          <Routes>
            {/* Route components in here */}
            <Route path='/games/mygames' element={<MyGamesPage />} />
            <Route path='/games' element={<GamesPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}