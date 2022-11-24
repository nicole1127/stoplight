import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        
      <div className={styles.main_content}>
        <div className={styles.maindiv}>
          <div className={styles.content_label}>
            <h3> About Us </h3>
          </div>
          <div className={styles.card}>
              <p><b>WebsiteName</b> is a web application system developed by PinkCodeX.
              This system helps traffic enforcement by automatically detecting
              and capturing Red Light Violations.
              </p>
          </div>
        </div>
        
      </div>
      
    
    );
  };
    
  export default AboutUs;