import _ from 'lodash';

import types from '../lib/action_types';

const initialState = {
  data: [],
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {

  case types.GET_NEWS_SUCCESS:
    return Object.assign({}, state, {
      data: action.data
    });

  default:
    return state;
  }
}
