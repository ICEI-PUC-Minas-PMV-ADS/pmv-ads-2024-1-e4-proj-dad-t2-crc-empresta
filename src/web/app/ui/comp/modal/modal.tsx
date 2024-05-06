import { useState, useEffect } from 'react';
import { getAllItems, lendItem } from '@/app/lib/actions';
import styles from './modal.module.css'

interface Item {
  id: string;
  name: string;
  isLend: boolean;
}

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getAllItems();
        const availableItems = data.filter((item: Item) => !item.isLend);
        setItems(availableItems);
      } catch (error) {
        console.error('Erro ao obter itens:', error);
      }
    };

    fetchItems();
  }, []);
  const handleLendItem = async (itemId: string) => {
    try {
      await lendItem(itemId);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000); // Exibe a mensagem de sucesso por 3 segundos
      // Recarrega a página após o empréstimo bem-sucedido
      window.location.reload();
    } catch (error) {
      console.error('Erro ao emprestar item:', error);
    }
  };
  
  return (
    <div className={styles.modaloverlay}>
    <div className={styles.modal}>
      <span className={styles.close} onClick={onClose}>&times;</span>
      <div className={styles.modalcontent}>
        <h2>Itens Disponíveis</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name}
              <button className={styles.itemButton} onClick={() => handleLendItem(item.id)}>Emprestar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {showSuccessMessage && (
        <div className={styles.successMessage}>
          Empréstimo realizado com sucesso!
        </div>
      )}
  </div>
);
};

export default Modal;