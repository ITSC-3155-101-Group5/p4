'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/Header';
import Example from './components/example/Example';
import States from './components/states/States';
class P4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'example',
    };

    this.handleSwitchView = this.handleSwitchView.bind(this);
  }

  handleSwitchView() {
    this.setState((prevState) => ({
      currentView: prevState.currentView === 'example' ? 'states' : 'example',
    }));
  }

  render() {
    const { currentView } = this.state;

    const buttonText =
      currentView === 'example'
        ? 'Switch to States'
        : 'Switch to Example';

    return (
      <div>
        <Header />

        <div className="view-switcher">
          <button type="button" onClick={this.handleSwitchView}>
            {buttonText}
          </button>
        </div>

        <div className="view-container">
          {currentView === 'example' ? <Example /> : <States />}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<P4 />, document.getElementById('reactapp'));