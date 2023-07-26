import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faBasketShopping,
  faHeart,
  faMagnifyingGlass,
  faCookieBite,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { seedRecipe } from './data/seed';
library.add(
  faBars,
  faBasketShopping,
  faHeart,
  faMagnifyingGlass,
  faCookieBite,
  faXmark
);
seedRecipe();
function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill d-flex flex-column">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
