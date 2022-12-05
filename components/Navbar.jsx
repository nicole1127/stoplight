import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { HiHome } from 'react-icons/hi'
import { RiLogoutCircleRLine } from 'react-icons/ri'


const Navbar = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.logo}>
        <img src="/images/sidebar-trafficlight.png" />
        <h2>ADMIN</h2>
      </div>
      <div className={styles.links}>
        <div className={styles.dashboarddiv}>
          <HiHome className={styles.dashboard_icon}/>
          <Link href="/dashboard" className={styles.dashboard}>Dashboard</Link>
        </div>
        <div className={styles.logoutdiv}>
          <RiLogoutCircleRLine className={styles.logout_icon}/>
          <Link href="/login" className={styles.logout}>Logout</Link>
        </div>
        <br/><br/>
      </div>
    </div>
  )
}

export default Navbar