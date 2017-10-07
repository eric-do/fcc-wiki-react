import React, { Component } from 'react';

class WikiArticleRow extends React.Component {
    render() {
      const article = this.props.article;
      const title = this.props.name;
      const description = this.props.description;
      const url = this.props.url;

      return (
        <li>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{url}</p>
        </li>
      );
    }
  }

  export default WikiArticleRow;