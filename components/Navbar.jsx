import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { HiHome } from 'react-icons/hi'
import { RiLogoutCircleRLine } from 'react-icons/ri'


const Navbar = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.logo}>
        <Image src="/images/sidebar-trafficlight.png" className={styles.navbar_logo} width="45" height="45"/>
        <h2>ADMIN</h2>
      </div>
      <div className={styles.links}>
        <div className={styles.dashboarddiv}>
          <HiHome className={styles.dashboard_icon}/>
          <Link href="/dashboard" className={styles.dashboard}>Dashboard</Link>
        </div>
        <div className={styles.logoutdiv}>
          <RiLogoutCircleRLine className={styles.logout_icon}/>
          <Link href="/" className={styles.logout}>Logout</Link>
        </div>
        <br/><br/>
      </div>
    </div>
  )
}

export default Navbar