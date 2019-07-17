import React from 'react';
import { Route, Link } from 'react-router-dom';
import { history } from '../../store';
import AddName from '../addName';
import Tiles from '../tiles';
import About from '../../components/about';
import HallOfFame from '../../components/hallOfFame';

const App = () => (
  <div className="container">
    <header>
      <Link to="/" className={ (history.location.pathname === '/' ? 'active' : '') }>About</Link>
      <Link to="/tiles" className={ (history.location.pathname === '/tiles' ? 'active' : '') }>Tiles</Link>
      <Link to="/hall-of-fame" className={ (history.location.pathname === '/hall-of-fame' ? 'active' : '') }>Hall of Fame</Link>
    </header>

    <main>
      <Route exact path="/" component={About} />
      <Route exact path="/tiles" component={Tiles} />
      <Route exact path="/add-name" component={AddName} />
      <Route exact path="/hall-of-fame" component={HallOfFame} />
    </main>
  </div>
);

export default App;