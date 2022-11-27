import styles from "./About.module.css";

const About = () => {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content_label}>
            <h3> About </h3>
          </div>

          {/*
          <div className={styles.card}>
              <p><b>WebsiteName</b> is a web application system developed by PinkCodeX.<br/>
              This system helps traffic enforcement by automatically detecting
              and capturing Red Light Violations.
              </p>
          </div>
          */}
          
        </div>
      </div>
    );
  };
    
export default About;
