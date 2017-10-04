import React, { Component } from 'react';

class Search extends React.Component {
    render() {
      return (
        <form>
          <div>
            <input
              value={this.state.input}
              onChange={this.handleChange} />
            <button onClick={this.Search}>Search</button>
            <h1>{this.state.submit}</h1>
            </div>
        </form>
      );
    }
  }