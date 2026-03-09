import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.models.states', window.models.states);
    this.state = {
      substring: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ substring: event.target.value });
  }

  getFilteredStates() {
    const { substring } = this.state;
    const allStates = window.models.states();

    if (!substring) return allStates;

    return allStates.filter(state => state.toLowerCase().includes(substring.toLowerCase()));
  }

  render() {
    const { substring } = this.state;
    const filteredStates = this.getFilteredStates();
    const sortedStates = [...filteredStates].sort();

    return (
      <div className="states-container">
        <h2>States Finder</h2>
        <div className="states-input-section">
          <label htmlFor="states-input">Filter by substring</label>
          <input
            id="states-input"
            type="text"
            value={substring}
            onChange={this.handleChange}
            placeholder="Type a substring..."
            className="states-input"
          />
        </div>


        {substring && (
          <p className="states-filter-label">
            Showing states container: <strong>&quot;{substring}&quot;</strong>
          </p>
        )}

        {sortedStates.length === 0 ? (
          <p className="states-no-match">
            No states found matching &quot;{substring}&quot;.
          </p>
        ) : (
          <ul className="states-list">
            {sortedStates.map(state => (
              <li key={state} className="states-list-item">
                {state}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default States;
