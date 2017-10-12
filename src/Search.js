import React, { Component } from 'react';
import $ from 'jquery'; 
import ReactDOM from 'react-dom';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
      articles: []
    };
  }

  handleChange = (event) => {
    console.log("Change was handled");
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submit: this.state.input
    });

   // var query = ReactDOM.findDOMNode(this.refs.query).value;
    this.props.search(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.input}
          ref="searchTerm"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          placeholder="Enter a search term" 
          />
        <button 
          type="submit">Search</button>
        
      </form>
    );
  }
}

  export default Search;