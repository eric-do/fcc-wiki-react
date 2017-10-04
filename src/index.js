import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WikiArticleRow from './WikiArticleRow';
import WikiSearchTable from './WikiSearchTable';
import Search from './Search';


/* ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();  */

/* class WikiArticleRow extends React.Component {
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
   */
  
  const ARTICLES = [
    {title: 'Netflix', description: 'Netflix is an American entertainment company founded by Reed Hastings and Marc Randolph on August 29, 1997, in Scotts Valley, California.'},
    {title: 'Netflix Prize', description: 'The Netflix Prize was an open competition for the best collaborative filtering algorithm to predict user ratings for films, based on previous ratings without any other information about the users or films, i.e'}
  ];
  
  ReactDOM.render(
    <WikiSearchTable articles={ARTICLES} />,
    document.getElementById('wiki')
  );