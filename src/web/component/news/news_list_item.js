import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';


class NewsListItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className={css(styles.container) + " news-list-item-com"}>
        <a href={item.url} target="_blank">{item.title}</a>
        <div className={css(styles.infoBox)}>
          <span className={css(styles.info)}>By: {item.author}</span>
          <span className={css(styles.info)}>Subreddit: /r/{item.subreddit}</span>
          <span className={css(styles.info)}>Total Upvotes: {item.ups}</span>
          <span className={css(styles.info)}>Total Comments: {item.num_comments}</span>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: '10px',
    background: '#fff',
    marginBottom: '10px',
    flexDirection: 'column',
  },
  infoBox: {
    flexDirection: 'row',
    marginTop: 10,
  },
  info: {
    marginRight: '10px',
    fontSize: '11px',
  },
});


export default NewsListItem;


