import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

class PlacesBox extends React.Component {
  constructor(props) {
    debugger;
    super(props)
    this.state = {data: []}
  }

  componentDidMount() {
    this.getPlacesFromServer();
    setInterval(this.getPlacesFromServer(), this.props.pollInterval);
  }

  // componentWillUnmount() {
  //   this.clearInterval(this.interval);
  // }

  getPlacesFromServer() {
    $.ajax({
      url: '/api/places',
      context: $("#content"),
      success: data => {
        this.setState({data: data});
      },
      error: err => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  render() {
    var placesNodes = this.state.data.map(place => {
      return(
        <article className="place" key={place.id}>
          <h3>{place.name}</h3>
          <br />
          <span>Neighborhood: {place.neighborhood}</span>
          <br />
          <span>Description: {place.description}</span>
          <br />
          <span>Category: {place.category.name}</span>
          <br /><br />
        </article>
      )
    });
    return(
      <div className="places-box">
        {placesNodes}
      </div>
    );
  }
}

$(document).ready(function() {
  render(
    <PlacesBox url='/api/places' pollInterval={2000} />,
    document.getElementById("content")
  );
});
