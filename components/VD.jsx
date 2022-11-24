import styles from "./VD.module.css";

const VD = () => {
    return (
        
    <div className={styles.main_content}>
      <button className={styles.back}>
        <img className={styles.arrow} src="/images/body-arrowleft.png" alt="backbutton"></img>
      </button>
      <div className={styles.maindiv}>
        <div className={styles.content_label}>
          <h3> Violations </h3>
        </div>
        
        <div className={styles.card}>
          <h3 className="platenum">Plate Number:</h3>
          <h3 className="platenum">Date:</h3>
          <h3 className="platenum">Time:</h3>
          <h3 className="platenum">Location</h3>
          <h3 className="platenum">Violation Type:</h3>
          <button className={styles.confirm} >CONFIRM</button>
          <button className={styles.invalidate}>INVALIDATE</button>
        </div>
      </div>
    </div>
      
    
    );
  };
    
  export default VD;