import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, NavLink, Navigate,
} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import AboutPage from './Pages/About/AboutPage';
import UsersPage from './Pages/Users/UsersPage';
import UserPage from './Pages/User/UserPage';
import Page404 from './Pages/404/Page404';

// <header className="header">
//   <nav><a href="/">Home</a></nav>
//   <nav><a href="/">About</a></nav>
//   <nav><a href="/">Users</a></nav>
// </header>

const App = () => (
  <Router>
    <header className="header">
      <nav className="navigation">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/about">About</NavLink>
        <NavLink className="link" to="/users">Users</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}

      <Route path="/about" element={<AboutPage />}>
        <Route path="second-route" element={<HomePage />} />
        <Route path="third-route" element={<UsersPage />} />
      </Route>

      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserPage />} />
      {/* <Route path="*" element={<Page404 />} /> */}
      <Route path="404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="404" />} />
    </Routes>
  </Router>
);

export default App;
