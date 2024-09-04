import constructorSlice from './constructorSlice';
import feedSlice from './feedSlice';
import ingredientSlice from './ingredientSlice';
import orderSlice from './orderSlice';
import ordersSlice from './ordersSlice';
import { rootReducer } from './store';
import userSlice from './userSlice';

describe('тестирование rootReducer', () => {
  it('rootReducer', () => {
    expect(rootReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual({
      [ingredientSlice.name]: ingredientSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      }),
      [constructorSlice.name]: constructorSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      }),
      [feedSlice.name]: feedSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      }),
      [userSlice.name]: userSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      }),
      [orderSlice.name]: orderSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      }),
      [ordersSlice.name]: ordersSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      })
    });
  });
});
