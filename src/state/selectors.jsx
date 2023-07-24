import { selectorFamily } from 'recoil';
import { recipesState } from './atoms';
import { getRecipe } from 'apis/recipes';
import { selector } from 'recoil';

export const selectFilteredRecipes = selectorFamily({
  key: 'selectFilteredRecipes',
  get:
    (filter) =>
    ({ get }) => {
      const recipes = get(recipesState);
      return (
        recipes.length &&
        recipes.filter((r) => r.title.toLowerCase().startsWith(filter))
      );
    },
});

export const selectActiveRecipe = selectorFamily({
  key: 'selectActiveRecipe',
  get: (recipeId) => async () => recipeId && (await getRecipe(recipeId)),
});

export const selectWishRecipe = selector({
  key: 'selectWishRecipe',
  get: ({ get }) => get(recipesState)?.filter((r) => r.liked),
});
