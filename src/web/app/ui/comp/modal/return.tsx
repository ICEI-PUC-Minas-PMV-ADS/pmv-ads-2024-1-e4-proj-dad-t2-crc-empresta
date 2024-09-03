import { returnItem } from '@/app/lib/actions';
import { Item, ItemLendingHistory } from "@/util/types";
import styles from './modal.module.css';
import { Grid, GridCol, Table } from '@mantine/core';


interface ModalProps {
  items: ItemLendingHistory[];
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
                <th className="pb-2 px-4 pt-1">Cód. Item</th>
                <th className="pb-2 px-4 pt-1">Item</th>
                <th className="pb-2 px-4 pt-1">Aluno</th>
                <th className="pb-2 px-4 pt-1">Cod. de Pessoa</th>
                <th className="pb-2 px-4 pt-1">Data de Empréstimo</th>
              </tr>
            </thead>
            <tbody>
              {items.map(itemLending => (
                <tr key={itemLending.id}>
                  <td className='py-1 px-4'> {itemLending.code} </td>
                  <td className='py-1 px-4'> {itemLending.name} </td>
                  <td className='py-1 px-4'>{itemLending.studentName}</td>
                  <td className='py-1 px-4'>{itemLending.studentId}
                  </td>
                  <td className='py-1 px-4'>{itemLending.dateLend}</td>
                  <td className='py-1 px-4'><button onClick={() => handleReturnItem(itemLending.id)}>Devolver</button></td>
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