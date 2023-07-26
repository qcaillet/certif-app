import { selectorFamily } from 'recoil';
import { recipesState } from './atoms';
import { getRecipe } from 'apis/recipes';
import { selector } from 'recoil';
import { ObjectId } from 'types';

export const selectFilteredRecipes = selectorFamily({
  key: 'selectFilteredRecipes',
  get:
    (filter: string) =>
    ({ get }) => {
      const recipes = get(recipesState);
      return recipes.length
        ? recipes.filter((r) => r.title.toLowerCase().startsWith(filter))
        : [];
    },
});

export const selectActiveRecipe = selectorFamily({
  key: 'selectActiveRecipe',
  get: (recipeId?: ObjectId) => async () =>
    recipeId ? await getRecipe(recipeId) : null,
});

export const selectWishRecipe = selector({
  key: 'selectWishRecipe',
  get: ({ get }) => get(recipesState)?.filter((r) => r.liked),
});
