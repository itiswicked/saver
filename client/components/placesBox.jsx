import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

import Places from './places.jsx'
import PlacesForm from './placesForm.jsx'


export default class PlacesBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <PlacesForm url='/api/categories' />
        <Places url='/api/places' pollInterval={2000} />
      </div>
    );
  }
}
