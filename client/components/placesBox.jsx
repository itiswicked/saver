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
      success: data => {
        this.setState({data: data});
      },
      error: err => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  render() {
    // So I can test things.
    return(
      <p>{this.state.data}</p>
    );
  }
}
