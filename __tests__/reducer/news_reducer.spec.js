import types from '../../src/lib/action_types';
import reducer from '../../src/reducer/news_reducer';

describe('news reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({data: []})
  })

  it('should handle GET_NEWS_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.GET_NEWS_SUCCESS,
        data: [{id: 0, title: "test"}]
      })
    ).toEqual(
      {
        data: [{id: 0, title: "test"}]
      }
    )
  })

})

