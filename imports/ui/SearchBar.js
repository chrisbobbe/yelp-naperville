import React, {Component} from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/fontawesome-free-solid'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /* Event handlers */

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchFunction(this.state.query);
  }

  /* Lifecycle methods */

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" />
        {this.props.loading &&
          <FontAwesomeIcon spin icon={faCircleNotch} />
        }
      </form>
    );
  }
}

export default SearchBar;
