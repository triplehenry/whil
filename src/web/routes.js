import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';

import reducers from '../reducer';

import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory()

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = autoRehydrate()(createStoreWithMiddleware)(reducers)

import App from './container/app';
import Home from './container/home';
import About from './container/about';
import Contact from './container/contact';

class Routes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rehydrated: false
    };
  }

  componentWillMount(){
    persistStore(store, undefined, () => {
      this.setState({ rehydrated: true })
    });
  }

  render() {
    if (!this.state.rehydrated){
      return null;
    }

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path={'/'} component={App}>
            <IndexRoute component={Home}/>
            <Route path={'about'} component={About}/>
            <Route path={'contact'} component={Contact}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Routes;
