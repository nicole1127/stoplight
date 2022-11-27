import { Link } from 'react-router-dom';
import styles from "./Login.module.css";


const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.imagediv}>
                    <img src="/images/login_picture.png"/>
                </div>
                <div className={styles.form}>
                    <div className={styles.mainform}>
                        <h1> WELCOME </h1>
                        <h3> ADMINISTRATOR LOGIN </h3>
                        <div className={styles.forminput}>
                            <input placeholder="Username"></input>
                            <input type="password" placeholder="Password"></input>
                            <a href="/violations">
                                <button className={styles.primary}> LOGIN </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Login;