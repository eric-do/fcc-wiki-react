import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WikiSearchTable from './WikiSearchTable';
import WikiArticleRow from './WikiArticleRow';
import WikiSearchResults from './WikiSearchResults';
import Search from './Search';

  const ARTICLES = [
    {title: 'Netflix', description: 'Netflix is an American entertainment company founded by Reed Hastings and Marc Randolph on August 29, 1997, in Scotts Valley, California.'},
    {title: 'Netflix Prize', description: 'The Netflix Prize was an open competition for the best collaborative filtering algorithm to predict user ratings for films, based on previous ratings without any other information about the users or films, i.e'}
  ];
  
  ReactDOM.render(
    <WikiSearchTable articles={ARTICLES} />,
    document.getElementById('wiki')
  );