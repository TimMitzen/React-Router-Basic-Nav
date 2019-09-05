import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter, Route } from "react-router-dom"

const App = () => (
  <div>
    <Navigation />
    <Route path="/" component={Home} exact />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Home} />
    <Route path="/Home" component={Home} />
  </div>
);

export default App;
