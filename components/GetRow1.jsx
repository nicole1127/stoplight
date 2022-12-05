import React from 'react'
import styles from './Table.module.css'
import Router from 'next/router'

const GetRow1 = () => {
    const  id = "1";
    const  platenum = "XXXXXXX";
    const  date = "November 28, 2022";
    const  time = "11:35 AM";
    const  loc = "Congressional Ave, Dasmariñas, Cavite";
    const  type = "Red Light";
    const  status = "Unverified";

    function sendProps() {
        Router.push({
            pathname: "/tabledata1",
            query:{
                id,
                platenum,
                date,
                time,
                loc,
                type,
                status
            }
        })
    }
  return (
    <div>
        <button className={styles.viewbtn} onClick={ () => sendProps() }> View </button>
    </div>
  )
}

export default GetRow1