'use client'
import Image from "next/image";
import styles from "./login.module.css"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authenticate, isAuthenticated } from '../lib/actions';
import { useState } from 'react';

const Login = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');  
    const router = useRouter();
  
    useEffect(() => {
      const checkAuthStatus = async () => {
        try {
          const authenticated = await isAuthenticated();
          if (authenticated) {
            router.push('/home');
          }
        } catch (error) {
          console.error('Erro ao verificar autenticação:', error);
        }
      };
  
      checkAuthStatus();
    }, []);
  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        await authenticate(name, password);
        router.push('/home');
      } catch (error) {
        console.error('Erro ao autenticar:', error);
      }
    };
  return (
    <div className={`${styles.loginpage} ${styles.corpo}`}>
      <Image
        fill={true}
        src="/background_puc_blue.png"
        alt="Background"
        className={styles.backgroundimage} />
      <div className={styles.logincontainer}>
        <Image
          width={250}
          height={190}
          src="/logo.png"
          alt="Logo"
          className={styles.logoimage} />
        <div className={styles.logoplaceholder}></div>

        <div className={styles.loginform}>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              id="username"
              placeholder="Usuário"
              className={styles.inputfield}
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Senha"
              className={styles.inputfield}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className={styles.loginbutton}>
              Login
            </button>
          </form>
          <div className={styles.forgotpasswordlink}>
            <a href="#" className={styles.forgotpassword}>Esqueceu sua senha?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;