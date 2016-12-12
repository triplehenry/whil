import * as actions from '../../src/action/app_action';
import types from '../../src/lib/action_types';

describe('Action: updatePath', () => {
  it('should update "path" in App reducer', () => {
    const path = '/about';
    const expectedAction = {
      type: types.UPDATE_PATH,
      path
    };

    expect(actions.updatePath('/about')).toEqual(expectedAction);
  });
});
