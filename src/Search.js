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

  wikiRandom = () => {
    window.location = 'https://en.wikipedia.org/wiki/Special:Random';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            value={this.state.input}
            ref="searchTerm"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            placeholder="Enter a search term" 
            />
          <input value="Search" readOnly={true} type="Submit"/> 
        </form>
        <a href='https://en.wikipedia.org/wiki/Special:Random'>
          <button>Lucky
          </button>
        </a>
      </div>
    );
  }
}

  export default Search;