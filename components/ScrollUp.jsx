import React from 'react'
import styles from './ScrollUp.module.css'
import { FaAngleUp } from 'react-icons/fa'
import { useState, useEffect } from "react"


const ScrollUp = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        })
    }, [])
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <div className={styles.btm_to_top}>
            {" "}
            {showTopBtn && (
                <FaAngleUp className={styles.angleup} onClick={goToTop}/>
            )}
            {" "}
        </div>
    )
}

export default ScrollUp