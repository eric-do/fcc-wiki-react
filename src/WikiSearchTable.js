import React, { Component } from 'react';
import Search from './Search';
import WikiSearchResults from './WikiSearchResults';

class WikiSearchTable extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <WikiSearchResults articles={this.props.articles} />
            </div>

        );
    }
}

export default WikiSearchTable;