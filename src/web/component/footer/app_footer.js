import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class AppFooter extends Component {
  render() {
    return (
      <div className={css(styles.container) + " app-footer-com"}>
        <div>footer</div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '50px',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppFooter;


