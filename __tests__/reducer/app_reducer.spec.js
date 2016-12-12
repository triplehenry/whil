import types from '../../src/lib/action_types';
import reducer from '../../src/reducer/app_reducer';

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({path: ""})
  })

  it('should handle UPDATE_PATH', () => {
    expect(
      reducer([], {
        type: types.UPDATE_PATH,
        path: '/about'
      })
    ).toEqual(
      {
        path: '/about'
      }
    )
  })

})
