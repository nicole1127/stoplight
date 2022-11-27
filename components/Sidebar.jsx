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
                <a href="/violations">
                    <button> Violations </button>
                </a>
            </div>
            <div className={styles.btn_about}>
                <img src="/images/sidebar-about.png"></img>
                <a href="/about">
                    <button> About </button>
                </a>
            </div>
            <div className={styles.btn_logout}>
                <img src="/images/sidebar-logout.png"></img>
                <a href="/login">
                    <button> Logout </button>
                </a>
            </div>
        </div>
    )
}
    
    
export default Violations;