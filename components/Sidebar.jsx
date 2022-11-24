import styles from "./Sidebar.module.css";

const Violations = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_logo}>
                <img src="/images/sidebar-trafficlight.png"></img>
                <h3> ADMIN </h3>
            </div>

            <div className={styles.btn_violations}>
                <img src="/images/sidebar-violations.png"></img>
                <button> Violations </button>
            </div>
            <div className={styles.btn_aboutus}>
                <img src="/images/sidebar-about.png"></img>
                <button> About Us </button>
            </div>
            <div className={styles.btn_logout}>
                <img src="/images/sidebar-logout.png"></img>
                <button> Logout </button>
            </div>
        </div>
    )
}
    
    
export default Violations;



{/*
<div className={styles.wrapper}> 
        <div  className={styles.sidebar}>
            <div className={styles.profile} >
                <img src="/images/sidebar-trafficlight.png" alt="profile_picture"></img>
                <h3>ADMIN</h3>
            </div>
            <ul className={styles.hello}>
                <li className={styles.links}>
                    <a href="#" class="active">
                        <span className={styles.icon} >
                            <img src="/images/sidebar-violations.png" alt="violation_icon"></img>
                        </span>
                        <span className={styles.item} >Violations</span>
                    </a>
                </li>
                <li className={styles.links}>
                    <a href="#" class="active">
                        <span className={styles.icon1} >
                            <img src="/images/sidebar-about.png" alt="violation_icon"></img>
                        </span>
                        <span className={styles.item2} >About Us</span>
                    </a>
                </li>
                <li className={styles.links}>
                    <a href="#" class="active">
                        <span className={styles.icon2} >
                            <img src="/images/sidebar-logout.png" alt="violation_icon"></img>
                        </span>
                        <span className={styles.item3} >Logout</span>
                    </a>
                </li>
            </ul>
       </div>
    </div>
    

        
    );
  };
*/}
