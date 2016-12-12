import types from '../lib/action_types';

export function updatePath(path){
  return { type: types.UPDATE_PATH, path };
}

