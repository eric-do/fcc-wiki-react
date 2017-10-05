import React, { Component } from 'react';

class Search extends React.Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Enter a search term" />
          <button type="submit">Search</button>
        </form>
      );
    }
  }

  export default Search;