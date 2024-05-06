import Link from "next/link";
import styles from "./card.module.css"

interface CardProps {
    className?: string;    
    href: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ href, className = '', children, ...rest }) => {
    return (
        <Link href={href} className={`${className} ${styles.card}`} {...rest} >
                {children}
            
        </Link>
    );
};

export default Card;