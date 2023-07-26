import React from 'react';
import { useFetchRecipes } from 'hooks/useFetchRecipes';
import styles from './AdminRecipesList.module.scss';
import { deleteRecipe as deleteR } from 'apis/recipes';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { recipesState } from 'state';
import { ObjectId } from 'types';
function AdminRecipesList() {
  useFetchRecipes();
  const [recipes, setRecipes] = useRecoilState(recipesState);

  async function deleteRecipe(_id: ObjectId) {
    await deleteR(_id);
    setRecipes(recipes.filter((r) => r._id !== _id));
  }
  return (
    <ul className={styles.list}>
      {recipes.length
        ? recipes.map((r) => (
            <li className="d-flex align-items-center" key={r._id}>
              <span className="flex-fill">{r.title}</span>
              <NavLink to={`../edit/${r._id}`}>
                <button className="btn btn-primary mr-15">Editer</button>
              </NavLink>
              <button
                className="btn btn-danger"
                onClick={() => deleteRecipe(r._id)}
              >
                Supprimer
              </button>
            </li>
          ))
        : ''}
    </ul>
  );
}

export default AdminRecipesList;
