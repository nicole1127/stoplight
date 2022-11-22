import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content} >
                 <div className={styles.image}>
                    <img src="/images/login_picture.png" />
                </div>
                <div  className={styles.form}>
                    <h1>WELCOME</h1>
                    <h3>ADMINISTRATOR LOGIN</h3>
                    <div className={styles.input}>
                        <input autocomplete placeholder="Username"></input>
                        <input type="password" placeholder="Password"></input>
                    </div>
                    <button className={styles.primary} >LOGIN</button>
                </div>
            </div>
            
        </div>


        
    );
  };
  
  export default Login;