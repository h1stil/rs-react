import { IFormCard } from 'utils/types';
import { createPost, postReducer } from '../features/posts/postsSlice';
import { cardData } from '../utils/mock';

describe('check posts slice', () => {
  it('initial state', () => {
    const result = postReducer(undefined, { type: '' });
    expect(result).toEqual([]);
  });

  it('new state', () => {
    const action = { type: createPost.type, payload: cardData };
    const result: IFormCard[] = postReducer([], action);
    expect(result[0].name).toBe('test name');
  });
});
