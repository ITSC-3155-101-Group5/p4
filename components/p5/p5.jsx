

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

import Header from './header/Header';
import Example from './example/Example';
import States from './states/States';

class P5 extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />

          <nav className="toolbar">
            <Link to="/example" className="toolbar-link">Example</Link>
            <Link to="/states" className="toolbar-link">States</Link>
          </nav>

          <div className="view-container">
            <Route path="/example" component={Example} />
            <Route path="/states" component={States} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<P5 />, document.getElementById('reactapp'));