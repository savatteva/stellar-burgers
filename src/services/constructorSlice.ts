import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient } from '@utils-types';

type ConstructorItems = {
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
};

const initialState: ConstructorItems = {
  bun: null,
  ingredients: []
};

const constructorSlice = createSlice({
  name: 'constructorSlice',
  initialState,
  reducers: {
    add: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          state.bun = action.payload;
        } else {
          state.ingredients.push(action.payload);
        }
      },
      prepare: (item) => {
        const key = nanoid();
        return { payload: { ...item, key } };
      }
    },
    remove: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        const newState = state.ingredients.filter(
          (item) => item._id !== action.payload._id
        );
        state.ingredients = newState;
      },
      prepare: (item) => {
        const key = nanoid();
        return { payload: { ...item, key } };
      }
    },
    reorderConstructor: {
      reducer: (
        state,
        { payload }: PayloadAction<{ from: number; to: number }>
      ) => {
        const { from, to } = payload;
        const ingredients = [...state.ingredients];

        ingredients.splice(to, 0, ingredients.splice(from, 1)[0]);
        state.ingredients = ingredients;

        console.log(ingredients);
      },
      prepare: (item) => {
        const key = nanoid();
        return { payload: { ...item, key } };
      }
    }
  },
  selectors: {
    constructorItem: (state) => state
  }
});

export const { add, remove, reorderConstructor } = constructorSlice.actions;

export const { constructorItem } = constructorSlice.selectors;

export default constructorSlice;
