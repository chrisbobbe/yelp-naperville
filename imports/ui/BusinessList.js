import React, {Component} from 'react';

import BusinessItem from './BusinessItem.jsx';

class BusinessList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  /* Lifecycle methods */

  componentDidMount() {
    fetch('TODO: API endpoint').then(response => {
      return response.json();
    }).then(json => {
      let items = json[businesses].map(business => {
        return (
          <BusinessItem name={business.name} rating={business.rating} />
        )
      });
      this.setState({items: items});
    })
  }

  render() {
    return (
      <ul>
        {this.state.items}
      </ul>
    );
  }
}

export default BusinessList;
