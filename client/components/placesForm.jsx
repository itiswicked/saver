import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

export default class PlacesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      name: '',
      description: '',
      neighborhood: '',
      category_id: '',
      defaultValue: 'defaultValue'
    };
  }

  componentWillMount() {
    this.getCategoriesFromServer()
  }

  getCategoriesFromServer(url) {
    $.ajax({
      url: this.props.url,
      success: categories => {
        this.setState({categories: categories});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  optionsForSelect() {
    return this.state.categories.map(this.option);
  }

  option(category) {
    return(
      <option key={category.id} value={category.id}>{category.name}</option>
    );
  }

  render() {
    return(
      <div className="new-place-form">
        <h3>Add Place</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleNameChange.bind(this)}
          />
          <input
            type="text"
            placeholder="Neighborhood"
            value={this.state.neighborhood}
            onChange={this.handleNeighborhoodChange.bind(this)}
          />
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleDescriptionChange.bind(this)}
          />
          <select
            value={this.state.category_id}
            defaultValue={this.state.defaultValue}
            onChange={this.handleCategoryChange.bind(this)}>
            <option value="default">Select Category</option>
            {this.optionsForSelect()}
          </select>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleNeighborhoodChange(e) {
    this.setState({neighborhood: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  handleCategoryChange(e) {
    this.setState({category_id: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var place_info = {
      name: this.state.name,
      description: this.state.description,
      neighborhood: this.state.neighborhood,
      category_id: this.state.category_id
    };

    // validates presense of inputs
    for(var prop in place_info){
      if(place_info[prop] === '') { return; }
    }

    $.ajax({
      url: '/api/places',
      method: 'POST',
      type: 'application/json',
      data: {place: place_info},
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });

    this.setState({
      name: '',
      description: '',
      neighborhood: '',
      category_id: '',
      defaultValue: 'defaultValue'
    });
  }


}
