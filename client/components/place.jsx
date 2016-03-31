import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

export default class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {place: props.data};
  }

  render() {
    return(
      <article className="place">
        <h3>{this.state.place.name}</h3>
        <span>Neighborhood: {this.state.place.neighborhood}</span>
        <br />
        <span>Description: {this.state.place.description}</span>
        <br />
        <span>Category: {this.state.place.category.name}</span>
        <br /><br />
      </article>
    );
  }
}
