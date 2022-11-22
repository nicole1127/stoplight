import Button from "./Button";
import styles from "./Topbar.module.css";

const Topbar = () => {
    return (
      <nav className={styles.navbar}>
      <a href="" className={styles.brand_title}><img className={styles.avatar} src="/images/header-menu.png" alt="profile_picture"></img></a>
      <a href="#" className={styles.toggle_button}>
        <i className={styles.ri_layout_grid_fill}></i>
      </a>
      <div className={styles.navbar_links}>
        <ul>
          <a href="#"><img className={styles.avatar} src="/images/header-avatar.png" alt="profile_picture"></img></a>
        </ul>
      </div>
    </nav>
    );
  };
  
  export default Topbar;