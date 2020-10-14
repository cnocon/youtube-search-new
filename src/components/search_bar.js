import React, { Component } from 'react';

// Comment 1
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  onInputChange(term) {
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div className="row">
        <div className="search-bar col-md-8 col-lg-6 text-center">
          <h2>Find <strong style={{textTransform: 'uppercase'}}>{this.state.term ? this.state.term : `???`}</strong> on YouTube</h2>
          <div className="input-group">
            <input
              className="form-control"
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}/>
            <span className="input-group-btn">
              <button className="btn btn-warning" type="button"><b>Search YouTube</b></button>
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default SearchBar;

/*
// every class based component has its own state; when state changes, the component and all of its children will re-render
// constructor is called automatically when a new instance of a class-based component is created
// super(props)

COMMENT 2:
// a controlled field is a field who's value is set by the state
// when we set the value based on state, it is a controlled component; so it's value only changes when the state changes; so when a user types something they didn't actually change the input value, they just triggered a state change; this is valuable because it's how we should treat data; you say value is equal to state, not value is equal to what user typed... it's like if you need to know the value of the input, then it's the component that knows it's own value, it isn't some dom element

COMMENT 3:
// Downward Data Flow: only the most parent component in the application should be responsible for fetching data (e.g. from an api or flux framework or redux itself, even). Ours is index. All the child components need to make use of the data we fetch, so it makes sense it gets fetched in index.js
*/
