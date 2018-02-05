import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Nav = () => (
  <nav>
    <Link to="/">Search</Link>
    <Link to="/detail">Detail</Link>
  </nav>
);

export default Nav;
