import React from 'react'
import styles from '../header/Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cookingMaster from '../../assets/images/cookingMaster.png'
function Header() {
  return (
    <div className={`${styles.header} d-flex flex-row align-items-center`}>
    <FontAwesomeIcon className="mr-15" icon="fa-solid fa-bars" />
    <div className='flex-fill'> <img src={cookingMaster} alt="logo cookingMaster"/> </div>
    <ul>
        <button className='mr-5 btn btn-reverse-primary'>
          <FontAwesomeIcon className='mr-5' icon="fa-solid fa-basket-shopping" />
          <span >Panier </span> 
        </button>
        <button className='btn btn-primary'>Connexion</button> 
    </ul>
    </div>
  )
}

export default Header