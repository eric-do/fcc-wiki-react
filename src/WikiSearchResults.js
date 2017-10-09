import React, { Component } from 'react';
import WikiArticleRow from './WikiArticleRow';
import $ from 'jquery'; 

class WikiSearchResults extends React.Component {

  WikiSearchResults() {
    $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search=netflix&limit=10&namespace=0&format=json')
    //.then(({ results }) => this.setState({ articles: results }));
    .then((data) => {
      this.setState({articles: data});
      console.log(this.state.articles);
    });
  }

  render() {
    const rows = [];
    var nameAry = this.props.articles[1];
    var descriptionAry = this.props.articles[2];
    var urlAry = this.props.articles[3];

    console.log("Articles: " + nameAry);

    for (var i = 0; i < this.props.articles.length; i++) {
      //console.log("My name is: " + nameAry[i]);
      rows.push(
        <WikiArticleRow
          name = { nameAry[i] }
          description = { descriptionAry[i]}
          url = { urlAry[i] }
          key = { urlAry[i] }
           />
      )
    }
    
    /* this.props.articles.forEach((article) => {      
      rows.push(
        <WikiArticleRow
          article={article}
          key={article.title} />
      );
    }); */

    return (
      <ul>{rows}</ul>
    );
  }
}

  export default WikiSearchResults;