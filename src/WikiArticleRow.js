import React, { Component } from 'react';

class WikiArticleRow extends React.Component {
    render() {
      const article = this.props.article;
      const title = article.title;
      const description = article.description;
      return (
        <li>
          <h1>{title}</h1>
          <p>{description}</p>
        </li>
      );
    }
  }

  export default WikiArticleRow;