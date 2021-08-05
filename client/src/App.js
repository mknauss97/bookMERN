import React from "react";
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <div className="image">
        <Route exact path='/' component={Search} />
        <Route exact path='/saved' component={Saved} />
      </div>
    </Router>
  )
}

export default App;
