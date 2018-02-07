import React, {Component} from 'react';

import SearchIcon from 'material-ui-icons/Search';
import IconButton from 'material-ui/IconButton';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { CircularProgress }  from 'material-ui/Progress';

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
        <FormControl>
          <InputLabel htmlFor="search">Search</InputLabel>
          <Input
            autoFocus
            id="search"
            value={this.state.query}
            onChange={this.handleChange}
            endAdornment={ this.props.loading ?
              ( <CircularProgress size={30} variant="indeterminate" /> )
              :
              ( <SearchIcon size={30} /> )
            }
          />
        </FormControl>
      </form>
    );
  }
}

export default SearchBar;
