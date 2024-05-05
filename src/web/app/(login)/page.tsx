import Image from "next/image";
import Link from "next/link";
import styles from "./login.module.css"

export default function Login() {
  return (
    <div className={`${styles.loginpage} ${styles.corpo}`}>
    <div className={styles.backgroundimage}></div>
    <Image 
     fill={true}
    src="/background_puc_blue.png" 
    alt="Background" 
    className={styles.backgroundimage}/>
    <div className={styles.logincontainer}>
        <Image 
         width={250}
         height={190}
        src="/logo.png" 
        alt="Logo" 
        className={styles.logoimage}/>
      <div className={styles.logoplaceholder}></div>
      <div className={styles.loginform}>
        <input type="text" id="username" placeholder="Usuário" className={styles.inputfield}/>
        <input type="password" id="password" placeholder="Senha" className={styles.inputfield}/>
        <Link 
        href="/home"
        className={styles.loginbutton}>
          Login
        </Link>
        <div className={styles.forgotpasswordlink}>
          <a href="#" className={styles.forgotpassword}>Esqueceu sua senha?</a>
        </div>
      </div>
    </div>
  </div>  
  );
}
