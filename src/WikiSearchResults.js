import React, { Component } from 'react';
import WikiArticleRow from './WikiArticleRow';
import $ from 'jquery'; 

class WikiSearchResults extends React.Component {

  render() {
    const rows = [];
    var nameAry = this.props.articles[1];
    var descriptionAry = this.props.articles[2];
    var urlAry = this.props.articles[3];

    console.log("Articles: " + nameAry);

    if (this.props.articles[0] != 'undefined') {
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
    }

    return (
      <ul>{rows}</ul>
    );
  }
}

  export default WikiSearchResults;