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
        <h2 className="place-name">{this.state.place.name}</h2>
        <span className="place-category">
          {" - " + this.state.place.category.name}
        </span>
        <span>{"\"" + this.state.place.description + "\""}</span>
        <i className="material-icons location">location_on</i>
        <span className="place-neighborhood">{this.state.place.neighborhood}</span>
      </article>
    );
  }
}
