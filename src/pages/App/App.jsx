import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import MyCollectionPage from '../MyCollectionPage/MyCollectionPage';
import AllGamesPage from '../AllGamesPage/AllGamesPage';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
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
            <Route path='/games/mycollection' element={<MyCollectionPage />} />
            <Route path='/games/all' element={<AllGamesPage />} />
            <Route path="/*" element={<Navigate to="/games/mycollection" />} />
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