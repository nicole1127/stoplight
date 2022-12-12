import React from 'react'
import styles from './Table.module.css'
import Router from 'next/router'


const GetRow1 = () => {
    const  id = "1";
    const  platenumber = "XHJ 277";
    const  date = "November 28, 2022";
    const  time = "11:35 AM";
    const  loc = "Congressional Ave, Dasmariñas, Cavite";
    const  type = "Red Light";
    const  status = "Unverified";

    function sendProps() {
        Router.push({
            pathname: "/tabledata/tabledata1",
            query:{
                id,
                platenumber,
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