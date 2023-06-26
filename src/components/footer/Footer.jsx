import React from 'react'
import Styles from './Footer.module.scss'
function Footer() {
  return (
    <footer className={`${Styles.footer} d-flex flex-row align-items-center justify-content-center p-20`}>
      <p>Copyright © 2023 Cooking Master Platforms, Inc.</p>
    </footer>
  )
}

export default Footer