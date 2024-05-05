import styles from "./home.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Image
                        width={250}
                        height={190}
                        src="/logo.png"
                        alt="Logo" />
                </div>
                <div className={styles.usernfo}>
                    <span>Bem-vindo!</span>
                    
                </div>
            </header>
            <div className={styles.content}>
                <div className={styles.cardscontainer}>

                <Link
                    href="/emprestar"
                    className={`${styles.card} ${styles.emprestar}`}>
                <span>Pegar Emprestado</span>
                </Link>
                <Link
                    href="/devolver"
                    className={`${styles.card} ${styles.devolver}`}>
                        <span>Devolver</span>
                </Link >
                <Link
                    href="/historico"
                    className={`${styles.card} ${styles.historico}`}>
                        <span>Meu Histórico</span>
                </Link >
                </div>
            </div>
            
</>
)
}