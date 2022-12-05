import React from 'react'
import styles from './Dashboard.module.css'
import Header from './Header'
import Navbar from './Navbar'
import Table from './Table'

const Dashboard = () => {
  return (
    <div className={styles.parent}>
      <Header/>
      <Navbar/>
      <div className={styles.content}>
        <h3>Violations</h3>
        <Table/>
      </div>
    </div>
  )
}

export default Dashboard