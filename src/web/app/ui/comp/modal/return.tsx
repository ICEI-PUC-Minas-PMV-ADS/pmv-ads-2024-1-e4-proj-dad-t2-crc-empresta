import { returnItem } from '@/app/lib/actions';
import styles from './modal.module.css';
import { Grid, GridCol, Table } from '@mantine/core';

interface Item {
  id: string;
  name: string;
  date: string;
  studentName: string;
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
          <h2 className="text-xl">Devolução de Itens</h2>
          <Table className='justify-items-center'>
            <thead>
              <tr>
                <th className="pb-2 px-2 pt-1">Item</th>
                <th className="pb-2 px-2 pt-1">Aluno</th>
                <th className="pb-2 px-2 pt-1">Data de Empréstimo</th>
              </tr>
            </thead>
            <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td className='py-1 px-2'> {item.name} </td>
                    <td className='py-1 px-2'>{item.studentName}</td>
                    <td className='py-1 px-2'>{new Date(item.date).toLocaleDateString()}</td>
                    <td className='py-1 px-2'><button onClick={() => handleReturnItem(item.id)}>Devolver</button></td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default ReturnModal;
