import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
     <div>
        <h1>Home...</h1>
     </div>
  )
}

const About = () => {
  return (
     <div>
        <h1>About...</h1>
     </div>
  )
}

const Contact = () => {
  return (
     <div>
        <h1>Contact...</h1>
     </div>
  )
}

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
