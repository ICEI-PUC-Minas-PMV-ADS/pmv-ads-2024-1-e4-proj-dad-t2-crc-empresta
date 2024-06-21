'use client'
import { useState, useEffect, useMemo } from 'react';
import { lendItem } from '@/app/lib/actions';
import { getCatToId } from '@/app/lib/data';
import styles from './modal.module.css';
import { Category, Item, ModalProps } from '@/util/types';
import { Modal, Button, Grid, Notification, Alert, Loader, Select } from '@mantine/core';


const Modale: React.FC<ModalProps> = ({ opened, catId, catName, onClose, onItemIdChange }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [selectItemId, setSelectItemId] = useState<string>('');

  const fetchItems = useMemo(() => async () => {
    try {
      const category: Category = await getCatToId(catId);
      const availableItems = category.items.filter((item: Item) => !item.isLend);
      return availableItems;
    } catch (error) {
      console.error('Erro ao obter itens:', error);
      return [];
    }
  }, [catId]);

  useEffect(() => {
    const fetchItemsData = async () => {
      const data = await fetchItems();
      setItems(data);
      console.log(data)
    };

    fetchItemsData();
  }, [catId]);

  const handleLendItem = async (itemId: string) => {
    try {
      if (onItemIdChange) {
        setLoading(true);
        await lendItem(itemId);
        onItemIdChange(itemId);
        setLoading(false);
        setTimerRunning(true);
        setTimeout(() => {
          setTimerRunning(false);
        }, 4000);
      }
    } catch (error) {
      console.error('Erro ao emprestar item:', error);
      setLoading(false);
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
    {/* {showSuccessMessage && (
        <div className={styles.successMessage}>
          Empréstimo realizado com sucesso!
        </div>
      )} */}
  </div>
);
};

export default Modale;
