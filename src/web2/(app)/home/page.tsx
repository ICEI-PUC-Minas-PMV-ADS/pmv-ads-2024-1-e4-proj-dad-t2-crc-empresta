import styles from "./home.module.css"
import Image from "next/image"
import Link from "next/link"
import Header from "../ui/comp/header"

export default function Home() {
    return (
        <>
        <Header/>
            
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