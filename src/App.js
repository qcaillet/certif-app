import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/Content";
import styles from "./App.module.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars,faBasketShopping } from '@fortawesome/free-solid-svg-icons'


library.add(faBars, faBasketShopping)
function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Content />      
      <Footer />
    </div>
  );
}

export default App;
