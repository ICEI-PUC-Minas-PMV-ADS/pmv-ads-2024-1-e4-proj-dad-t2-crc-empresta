import { returnItem } from '@/app/lib/actions';
import styles from './modal.module.css';

interface Item {
  id: string;
  name: string;
}

interface ModalProps {
  items: Item[];
  onClose: () => void;
}

const ReturnModal: React.FC<ModalProps> = ({ items, onClose }) => {

  const handleReturnItem = async (itemId: string) => {
    try {
      await returnItem(itemId);
      onClose();      
      window.location.reload();
    } catch (error) {
      console.error('Erro ao devolver item:', error);
    }
  };

  return (
    <div className={styles.modaloverlay}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <div className={styles.modalcontent}>
          <h2>Devolução de Itens</h2>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => handleReturnItem(item.id)}>Devolver</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReturnModal;
