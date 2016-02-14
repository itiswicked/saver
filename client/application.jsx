import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom'
import {render} from 'react-dom';
import Test from './test.js';


// import TopLevelReactComponent Here

// call top level react component here
$(document).ready(function() {
  ReactDOM.render(
    <h1>Hello World from React!</h1>,
    document.getElementById("content")
  );
});
