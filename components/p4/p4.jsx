
import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../header/header.jsx';
import Example from '../example/Example.jsx';
import States from '../states/States.jsx';
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