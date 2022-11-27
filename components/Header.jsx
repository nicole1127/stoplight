import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.menuIcon}>
          <img src="/images/header-menu.png"></img>
        </div>
        <div className={styles.avatar}>
          <img src="/images/header-avatar.png"></img>
        </div>
      </header>
    </div>    
  );
};

export default Header;
