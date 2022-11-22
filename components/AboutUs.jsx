import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        
      <div className={styles.main_content}>
        <div className={styles.header}>About Us</div>
        <div className={styles.card}>
             <h3 className="text"><b>WebsiteName</b> is a web application system developed by PinkCodeX.
            This system helps traffic enforcement by automatically detecting
            and capturing Red Light Violations.
            </h3>
        </div>
      </div>
      
    
    );
  };
    
  export default AboutUs;