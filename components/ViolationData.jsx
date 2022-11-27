import styles from "./ViolationData.module.css";

const ViolationData = () => {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content_label}>
              <button>
                <img src="/images/body-arrowleft.png" />
              </button>
              <h3>Violation Details </h3>
            </div>
          {/*
          <div className={styles.divcard}>
            <div className={styles.card}>
              <h3 className="plateNumber">Plate Number:</h3>
              <h3 className="date">Date:</h3>
              <h3 className="time">Time:</h3>
              <h3 className="location">Location</h3>
              <h3 className="violationType">Violation Type:</h3>
              <button className={styles.confirmbtn} >CONFIRM</button>
              <button className={styles.invalidatebtn}>INVALIDATE</button>
            </div>
          </div>
          */}
        </div>
      </div>

      );
    };
    
    export default ViolationData;