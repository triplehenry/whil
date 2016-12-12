import React, { Component } from 'react';
import MediaQuery from 'react-responsive'

import AppHeader from '../component/header/app_header';
import AppFooter from '../component/footer/app_footer';
import Nav from '../component/nav/nav';
import { StyleSheet, css } from 'aphrodite/no-important';

class App extends Component {
  render() {
    return (
      <div className={css(styles.container) + " app-com"}>
        <div className={css(styles.header)}>
          <AppHeader />
        </div>
        <div className={css(styles.appContent)}>
          <MediaQuery minWidth={700} component="div" style={sideColumnStyle}>
            <Nav />
          </MediaQuery>

          <div className={css(styles.middleColumn)}>
            {this.props.children}
          </div>
          <MediaQuery minWidth={900} component="div" style={sideColumnStyle}>
            right column: will hide if less than 900px window width
          </MediaQuery>
        </div>
        <div className={css(styles.footer)}>
          <AppFooter />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
  },
  header: {
    flex: 'none',
    borderBottom: '1px solid #000',
  },
  appContent: { 
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  middleColumn: {
    flex: 1,
    padding: '15px',
    backgroundColor: '#eee',
    overflow: 'auto',
  },
  footer: {
    flex: 'none',
    borderTop: '1px solid #000',
  },
});

const sideColumnStyle = {
  width: '200px',
  padding: '15px',
};

export default App;
