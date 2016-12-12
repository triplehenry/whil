import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, css } from 'aphrodite/no-important';

import Nav from '../nav/nav';

class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // Path got updated so make sure the mobile menu is not displayed
    if (nextProps.path !== this.props.path) {
      this.setState({showMobileMenu: false});
    }
  }

  _onClickMenu() {
    this.setState({ showMobileMenu: !this.state.showMobileMenu });
  }

  render() {
    return (
      <div className={css(styles.container) + " app-header-com"}>
        <MediaQuery maxWidth={700} component="div" style={menuStyle} onClick={this._onClickMenu.bind(this)}>
          <i className={css(styles.menuIcon) + " fa fa-bars"} />
        </MediaQuery>
        <div>Whil Demo</div>
        {this.state.showMobileMenu && (
          <MediaQuery maxWidth={700} component="div" style={mobileMenuStyle}> 
            <Nav mobile={true} />
          </MediaQuery>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    height: '50px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 28,
  },
});

const menuStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  height: '50px',
  padding: '0 15px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

};

const mobileMenuStyle = {
  position: 'absolute',
  left: 0,
  top: '50px',
  width: '100%',
  backgroundColor: '#fff',
  borderBottom: '1px solid #ccc',
  borderTop: '1px solid #ccc',
};

const mapStateToProps = (state, ownProps) => {
  return {
    path: state.app.path,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);


