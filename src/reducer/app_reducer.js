import _ from 'lodash';

import types from '../lib/action_types';

const initialState = {
  path: "",
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {

  case types.UPDATE_PATH:
    return Object.assign({}, state, {
      path: action.path
    });

  default:
    return state;
  }
}

