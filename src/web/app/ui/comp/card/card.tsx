import styles from "./card.module.css"

interface CardProps {
    className?: string;    
    onClick?: () => void;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({  className = '',onClick, children, ...rest }) => {
    return (
        <div onClick={onClick} className={`${className} ${styles.card}`} {...rest} >
                {children}
            
        </div>
    );
};

export default Card;