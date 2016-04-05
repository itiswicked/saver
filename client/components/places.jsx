import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import createFragment from 'react-addons-create-fragment';

import Place from './place.jsx'

export default class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    this.getPlacesFromServer();
    this.interval = setInterval(this.getPlacesFromServer.bind(this), this.props.pollInterval);
  }

  getPlacesFromServer() {
    $.ajax({
      url: this.props.url,
      success: data => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  placeNode(place) {
    return <Place data={place} key={place.id} />;
  }

  render() {
    return(
      <div className="places-box">
        {this.state.data.map(this.placeNode)}
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
