import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import bookStore from "bookStore";
import "./App.css";

function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/company">
          Company
        </NavLink>
      </li>
    </ul>
  );
}

function Home() {
  return (
    <div>
      <h3>Home</h3>
    </div>
  );
}

function Product() {
  return (
    <div>
      <h3>Product</h3>
    </div>
  );
}

function Company() {
  return (
    <div>
      <h3>Company</h3>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
      </div>
    </Router>
  );
}

export default App;
