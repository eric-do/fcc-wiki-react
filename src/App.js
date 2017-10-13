import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
//import WikiSearchTable from './WikiSearchTable';
import $ from 'jquery';
import Search from './Search';
import WikiSearchResults from './WikiSearchResults';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  render() {
    return (
      <div>
        <Search search={this.wikiSearch} />
        <WikiSearchResults articles={this.state.articles} />
    </div>
  );
  }

  componentDidMount() {
   // this.wikiSearch();
  }

  wikiSearch = (searchTerm) => {
    if (searchTerm) {
      $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&limit=10&namespace=0&format=json')
      .then((data) => {
        this.setState({articles: data});
        console.log(this.state.articles);
      }, (error) => {
        console.log("Search error: " + error);
      });
    }
    else {
      this.setState({articles: []});
    }
  }
}

export default App;
