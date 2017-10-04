import React, { Component } from 'react';
import WikiArticleRow from './WikiArticleRow';

class WikiSearchTable extends React.Component {
    render() {
      const rows = [];
      
      this.props.articles.forEach((article) => {      
        rows.push(
          <WikiArticleRow
            article={article}
            key={article.title} />
        );
      });
  
      return (
        <ul>{rows}</ul>
      );
    }
  }

  export default WikiSearchTable;