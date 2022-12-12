import React from 'react'
import styles from './ScrollDown.module.css'
import { FaAngleDown } from 'react-icons/fa'
import { useState, useEffect } from "react"


const ScrollDown = () => {
    const [showDownBtn, setShowDownBtn] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setShowDownBtn(true);
            } else {
                setShowDownBtn(true);
            }
        })
    }, [])
    const goToBottom = () => {
        window.scrollTo({
            top: 1000,
            bottom: 0,
            behavior: "smooth",
        })
    }
    return (
        <div className={styles.top_to_btm}>
            {" "}
            {showDownBtn && (
                <FaAngleDown className={styles.angledown} onClick={goToBottom}/>
            )}
            {" "}
        </div>
    )
}

export default ScrollDown