import React from 'react'
import styles from './Recipe.module.scss'
import recipe from '../assets/images/recipe.jpg'
function Recipe() {
  return (
    <div className={styles.recipe}>
        <div className={styles.imageContainer}>
            <img src= {recipe} alt='recipe'></img>
        </div>
        <div className={`d-flex flex-row justify-content-center align-items-center
        ${styles.recipeTitle}`}>
            <h3>Velouter de citrouille</h3>
        </div>  
    </div>
  )
}
 
export default Recipe