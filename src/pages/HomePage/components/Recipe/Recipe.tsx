import React from 'react';
import styles from './Recipe.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RecipeI } from 'interfaces';
import { ObjectId } from 'types';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Recipe({
  recipe,
  updateRecipe,
  deleteRecipe,
}: {
  recipe: RecipeI;
  updateRecipe: (x: RecipeI) => Promise<void>;
  deleteRecipe: (x: ObjectId) => Promise<void>;
}) {
  function handleClickLike() {
    updateRecipe({ ...recipe, liked: !recipe.liked });
  }

  async function handleClickDelete(e: React.MouseEvent<SVGSVGElement>) {
    e.stopPropagation();
    deleteRecipe(recipe._id);
  }

  return (
    <div onClick={handleClickLike} className={styles.recipe}>
      <FontAwesomeIcon
        onClick={handleClickDelete}
        className={styles.deleteIcon}
        icon={faXmark}
      />{' '}
      <div className={styles.imageContainer}>
        <img src={recipe.image} alt="recipe"></img>
      </div>
      <div
        className={`d-flex flex-column justify-content-center align-items-center
        ${styles.recipeTitle}`}
      >
        <h3 className="mb-20">{recipe.title}</h3>
        <FontAwesomeIcon
          icon={faHeart}
          className={`${recipe.liked ? 'text-primary' : ''}`}
        />
      </div>
    </div>
  );
}
