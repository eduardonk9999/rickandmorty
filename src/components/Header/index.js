import Image from 'next/image'
import React from 'react'
import Logo from '../../images/logo.png'
import  styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Image src={Logo} />
      </h1>
    </header>
  )
}

export default Header