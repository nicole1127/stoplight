import styles from "./Image.module.css";

const Image = () => {
    return (
        
      <div className={styles.main_content}>
        <div className={styles.card}>
          <img src="image.jpg" alt="Image" width="500" height="600"></img>
        </div>
        <div className={styles.card2}>
          <img src="image.jpg" alt="Image" width="500" height="600"></img>
        </div>
      </div>
      
    
    );
  };
    
  export default Image;