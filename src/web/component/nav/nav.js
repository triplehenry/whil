import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite/no-important';

import { updatePath } from '../../../action/app_action';

class Nav extends Component {

  _onClickLink(path) {
    this.props.updatePath(path);
  }

  render() {

    const liClassName = css(
      styles.li,
      this.props.mobile && styles.liMobile
    )

    const menu = [
      {path: '/', name: 'Home'},
      {path: '/about', name: 'About'},
      {path: '/contact', name: 'Contact'},
    ];

    return (
      <div className="nav-com">
        <ul className={css(styles.ul)}>
          {_.map(menu, (item, index) => {
            return (
              <li key={index} className={liClassName}>
                <Link
                  onClick={this._onClickLink.bind(this, item.path)}
                  to={item.path}
                  className={css(styles.link)}
                  onlyActiveOnIndex
                  activeStyle={activeStyles}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  ul: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  },
  li: {
    display: 'flex',
    width: '100%',
  },
  liMobile: {
    textAlign: 'center',
  },
  link: {
    flex: 1,
    color: '#444',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1.2rem',
    transition: '200ms',
    padding: '10px',
    ':hover': {
      backgroundColor: '#f1f1f1',
    }
  },
});


const activeStyles = {
  color: 'red',
};


const mapStateToProps = (state, ownProps) => {
  return {
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updatePath,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);



