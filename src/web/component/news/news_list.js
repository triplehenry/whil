import React, { Component } from 'react';
import _ from 'lodash';
import { StyleSheet, css } from 'aphrodite/no-important';

import NewsListItem from './news_list_item';

class NewsList extends Component {
  render() {

    return (
      <div className="news-list-com">
        {_.map(this.props.items, (item, index) => {
          return (<NewsListItem key={index} item={item} />)
        })}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});


export default NewsList;

