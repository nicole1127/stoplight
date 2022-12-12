import React from 'react'
import styles from './ViolationDetail.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Navbar from './Navbar'
import { useRouter } from 'next/router'


const TableData1 = () => {
  const router =  useRouter()
  const {
      query:{ id, platenumber, date, time, loc, type, status},
    } = router
  const props = {
      id,
      platenumber,
      date,
      time,
      loc,
      type,
      status
  }

  return (
    <div className={styles.parent}>
        <Head>
            <title>Violation Detail</title>
            <link rel="icon" href="/myicon.png" />
        </Head>
        <Header/>
        <Navbar/>
        <div className={styles.content}>
            <h3>Violation Detail</h3>
            <div className={styles.card}>
                <div className={styles.label}>
                    <h3 className="platenum">Plate Number:</h3>
                    <h4>{props.platenumber}</h4>
                </div>
                <div className={styles.label}>
                    <h3 className="date">Date:</h3>
                    <h4>{props.date}</h4>
                </div>
                <div className={styles.label}>
                    <h3 className="time">Time:</h3>
                    <h4>{props.time}</h4>
                </div>
                <div className={styles.label}>
                    <h3 className="location">Location</h3>
                    <h4>{props.loc}</h4>
                </div>
                <div className={styles.label}>
                    <h3 className="violationType">Violation Type:</h3>
                    <h4>{props.type}</h4>
                    </div>
                <div className={styles.button}>
                    <Link href="/dashboard" className={styles.confirmbtn}>CONFIRM</Link>
                    <Link href='/dashboard' className={styles.invalidatebtn}>INVALIDATE</Link>
                </div>
            </div>
            <div className={styles.imgdiv}>
                <h3>Captured Images</h3>
                <Image src="/images/sample-violation1.jpg" className={styles.image1} width="700" height="350" />
                <Image src="/images/sample-violation1a.jpg" className={styles.image2} width="700" height="350" />
                <Image src="/images/sample-violation1b.jpg" className={styles.image3} width="700" height="350" />
            </div>
        </div>
    </div>
  )
}

export default TableData1