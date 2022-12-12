import React from 'react'
import styles from './Header.module.css'
import { CgProfile } from 'react-icons/cg'


const Header = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <h2>Red Light Enforcement System</h2>
        <CgProfile className={styles.profile_icon} />
      </div>
    </div>
  )
}

export default Header