import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Todo List</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/">TOP</Link>
          </li>
          <li>
            <Link to="/create">新規作成</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
