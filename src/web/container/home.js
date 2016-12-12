import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, css } from 'aphrodite/no-important';
import { getNews } from '../../action/news_action';

import NewsList from '../component/news/news_list';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.getNews().then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <div className="home-com">
        <div className={css(styles.header)}>
          <div className={css(styles.title)}>
            Reddit Top Posts
          </div>
          {this.state.isLoading && (
            <div className={css(styles.loadingWrap)}>
              <i className="fa fa-refresh fa-spin fa-1x fa-fw"></i>
              Loading...
            </div>
          )}
        </div>
        <NewsList items={this.props.news} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0 20px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    display: 'inline-block',
  },
  loadingWrap: {
    display: 'inline-block',
  },
});


const mapStateToProps = (state, ownProps) => {
  return {
    news: state.news.data || [],
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNews,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);



