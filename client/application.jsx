import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

class PlacesBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
  }

  componentDidMount() {
    this.getPlacesFromServer();
    setInterval(this.getPlacesFromServer(), this.props.pollInterval)
  }

  getPlacesFromServer() {
    $.ajax({
      url: '/api/places',
      context: $("#content"),
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    var placesNodes = this.state.data.map(place => {
      return(
        <li key={place.id}>
          Name: {place.name}
          <br />
          Neighborhood: {place.neighborhood}
          <br />
          Description: {place.description}
          <br />
          Category: {place.category.name}
          <br /><br />
        </li>
      )
    });
    return(
      <ul>
        {placesNodes}
      </ul>
    );
  }
}

$(document).ready(function() {
  render(
    <PlacesBox url='/api/places' pollInterval={2000} />,
    document.getElementById("content")
  );
});
