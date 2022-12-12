import React from 'react'
import styles from './Table.module.css'
import Router from 'next/router'


const GetRow2 = () => {
    const  id = "1";
    const  platenumber = "DEB 701";
    const  date = "December 1, 2022";
    const  time = "3:46 AM";
    const  loc = "R-2 Emilio Aguinaldo Hwy, Dasmariñas, Cavite";
    const  type = "Red Light";
    const  status = "Unverified";

    function sendProps() {
        Router.push({
            pathname: "/tabledata/tabledata2",
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

export default GetRow2