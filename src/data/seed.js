import { data } from './recipe';

export async function seedRecipe() {
  await fetch('https://restapi.fr/api/recipecaillet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
