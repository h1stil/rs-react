import { searchReducer, setSearch } from '../features/search/searchSlice';

describe('check search slice', () => {
  it('initial state', () => {
    const result = searchReducer(undefined, { type: '' });
    expect(result.search).toEqual('');
  });

  it('new state', () => {
    const action = { type: setSearch, payload: 'phone' };
    const result = searchReducer({ search: '' }, action);
    expect(result.search).toBe('phone');
  });
});
