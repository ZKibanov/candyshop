import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from 'react-router-dom';
import Menu from '../Menu/Menu'
import ImageSlider from '../Slider/Slider'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>

          <Menu />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </Router>
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch> */}
        <div className="nav_item">корзина</div>
        <div className="nav_item">картина</div>
        <div className="nav_item">юзер</div>
        <ImageSlider />
      </header>
    </div>
  );
}

export default App;
