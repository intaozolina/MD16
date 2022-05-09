import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, NavLink, Navigate,
} from 'react-router-dom';

import Page404 from './Pages/404/Page404';
import CharactersPage from './Pages/Characters/CharactersPage';
import AboutPage from './Pages/About/AboutPage';
import CharacterPage from './Pages/Character/CharacterPage';
import EpisodesPage from './Pages/Episodes/EpisodesPage';
import EpisodePage from './Pages/Episode/EpisodePage';

const App = () => (
  <Router>
    <header className="header">
      <nav className="navigation">
        <NavLink className="link" to="/about">About</NavLink>
        <NavLink className="link" to="/characters">Characters</NavLink>
        <NavLink className="link" to="/episodes">Episodes</NavLink>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<Navigate to="/characters" />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/characters/:id" element={<CharacterPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/episodes" element={<EpisodesPage />} />
      <Route path="/episodes/:id" element={<EpisodePage />} />
      <Route path="404" element={<Page404 />} />
      {/* <Route path="*" element={<Navigate to="404" />} /> */}
    </Routes>
  </Router>
);

export default App;
