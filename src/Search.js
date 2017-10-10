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
    //console.log("I'm handling a change and setting value to: " + event.target.value);
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit = () => {
    

    this.setState({
      submit: this.state.input
    });

   // var query = ReactDOM.findDOMNode(this.refs.query).value;
    this.props.search(this.state.input);

  }

  render() {
    return (
      <form>
        <input 
          value={this.state.input}
          ref="searchTerm"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          placeholder="Enter a search term" 
          />
        <button 
          type="button" 
          onClick={this.handleSubmit}>Search</button>
        <h1>{this.state.submit}</h1>
      </form>
    );
  }
}

  export default Search;