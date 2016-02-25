import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

export default class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: props.data};
  }

  render() {
    return(
      <article className="place">
        <h3>{this.state.data.name}</h3>
        <span>Neighborhood: {this.state.data.neighborhood}</span>
        <br />
        <span>Description: {this.state.data.description}</span>
        <br />
        <span>Category: {this.state.data.category.name}</span>
        <br /><br />
      </article>
    );
  }
}
