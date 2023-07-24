import React, { useState } from 'react';
import styles from './Wishlist.module.scss';
import { useSetRecoilState } from 'recoil';
import { recipesState, selectWishRecipe, wishlistDisplayState } from 'state';
import { useRecoilValue } from 'recoil';
import { updateRecipe } from 'apis/recipes';
function Wishlist() {
  const setWishListDisplay = useSetRecoilState(wishlistDisplayState);
  const recipes = useRecoilValue(selectWishRecipe);
  const setRecipes = useSetRecoilState(recipesState);
  const [remove, setRemove] = useState(false);

  async function handleClick(recipe) {
    const updatedRecipe = await updateRecipe({ ...recipe, liked: false });
    setRecipes((oldrecipes) =>
      oldrecipes.map((or) =>
        or._id === updatedRecipe._id ? updatedRecipe : or
      )
    );
  }
  function handleRemoveWishlist() {
    if (!remove) {
      setTimeout(() => {
        setWishListDisplay(false);
      }, 200);
      setRemove(true);
    }
  }
  return (
    <div onClick={handleRemoveWishlist} className={styles.container}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`${styles.wishlist} ${remove ? styles.remove : ''}`}
      >
        <h4 className="mb-20">wishlist</h4>
        <ul>
          {recipes.length &&
            recipes.map((r) => (
              <li key={recipes._id} className="d-flex align-items-center mb-10">
                <span className="flex-fill mr-15">{r.title}</span>
                <button
                  onClick={() => handleClick(r)}
                  className="btn btn-danger"
                ></button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Wishlist;
