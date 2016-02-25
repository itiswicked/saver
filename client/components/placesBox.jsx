import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

import Place from './place.jsx'

export default class PlacesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    this.getPlacesFromServer();
    this.interval = setInterval(this.getPlacesFromServer(), this.props.pollInterval);
  }

  getPlacesFromServer() {
    $.ajax({
      url: '/api/places',
      context: $("#content"),
      success: data => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  render() {
    var placesNodes = this.state.data.map(place => {
      return(
        <Place data={place} key={place.id} />
      );
    });
    return(
      <div className="places-box">
        {placesNodes}
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
