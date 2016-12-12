import types from '../lib/action_types';
import * as api from '../api';


export function getNews() {
  return (dispatch, getState) => {
    dispatch({ type: types.GET_NEWS });

    return api.getNews()
      .then((data) => {
        return dispatch({ type: types.GET_NEWS_SUCCESS, data: data });
      })
      .catch((err) => {
        if(err.data && err.data.errors){
          return dispatch({ type: types.GET_NEWS_ERROR });
        }else{
          throw Error(err.toString());
        }
      });
  }
}

