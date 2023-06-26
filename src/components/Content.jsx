import React from 'react'
import styles from './Content.module.scss'
import Recipe from './Recipe'
function content() {
  return (
    <div className='container flex-fill'>
      <h1 className='my-30'>HELLO </h1>
      <div className={ `card p-20 ${styles.contentCard}`}>
      <div className={styles.grid}>
        <Recipe/>
        <Recipe/>
        <Recipe/>
        <Recipe/>
        <Recipe/>
        <Recipe/>
      </div>
      </div>
    </div>
  )
}

export default content