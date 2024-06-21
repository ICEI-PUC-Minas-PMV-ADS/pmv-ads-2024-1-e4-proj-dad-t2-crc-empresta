import { returnItem} from '@/app/lib/actions';
import { Item } from "@/util/types";
import styles from './modal.module.css';
import { Grid, GridCol, Table } from '@mantine/core';


interface ModalProps {
  items: Item[];
  onClose: () => void;
}

const ReturnModal: React.FC<ModalProps> = ({ items, onClose }) => {

  const handleReturnItem = async (itemId: string) => {
    try {
      await returnItem(itemId);
      onClose(); // Fecha a modal após a devolução bem-sucedida
      // Recarrega a página após o empréstimo bem-sucedido
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
                <th className="pb-2 px-4 pt-1">Item</th>
                <th className="pb-2 px-4 pt-1">Aluno</th>
                <th className="pb-2 px-4 pt-1">Cod. de Pessoa</th>
                <th className="pb-2 px-4 pt-1">Data de Empréstimo</th>
              </tr>
            </thead>
            <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td className='py-1 px-4'> {item.name} </td>
                    <td className='py-1 px-4'>{item.studentName}</td>
                    <td className='py-1 px-4'>{item.studentId}</td>
                    <td className='py-1 px-4'>{new Date(item.dateLend).toLocaleDateString()}</td>
                    <td className='py-1 px-4'><button onClick={() => handleReturnItem(item.id)}>Devolver</button></td>
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
