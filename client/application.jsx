import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

import PlacesBox from './components/placesBox.jsx'

$(document).ready(function() {
  render(
    <PlacesBox />,
    document.getElementById("content")
  );
});
