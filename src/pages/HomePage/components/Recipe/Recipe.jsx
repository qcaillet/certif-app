import React from 'react';
import styles from './Recipe.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Recipe({ recipe, updateRecipe, deleteRecipe }) {
  function handleClickLike() {
    updateRecipe({ ...recipe, liked: !recipe.liked });
  }

  async function handleClickDelete(e) {
    e.stopPropagation();
    deleteRecipe(recipe._id);
  }

  return (
    <div onClick={handleClickLike} className={styles.recipe}>
      <FontAwesomeIcon
        onClick={handleClickDelete}
        className={styles.deleteIcon}
        icon="fa-solid fa-xmark"
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
          icon="fa-solid fa-heart"
          className={`${recipe.liked ? 'text-primary' : ''}`}
        />
      </div>
    </div>
  );
}
