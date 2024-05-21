'use client'
import Card from "@/app/ui/comp/card/card";
import Header from "@/app/ui/comp/header";
import { useState, useEffect, useMemo } from "react";
import Modal from '@/app/ui/comp/modal/modal';
import { getAllCat } from '@/app/lib/data';
import { useDisclosure } from "@mantine/hooks";
import { Category, Item } from "@/util/types";
import { Alert, CheckIcon } from "@mantine/core";
import Modale from "@/app/ui/comp/modal/modal";

export default function Emprestar() {
  const [opened, { open, close }] = useDisclosure(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCatId, setSelectedCatId] = useState<string>('');
  const [selectedCatName, setSelectedCatName] = useState<string>('');
  const [isItemLent, setIsItemLent] = useState<boolean>(false);
  const [selectedItemId, setSelectedItemId] = useState<string>('');
  const [notAvailable, setNotAvailable] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const data = await getAllCat();
        setCategories(data);
      } catch (error) {
        console.error('Erro ao obter categorias:', error);
      }
    };

    fetchCategoriesData();
  }, []);

  const handleCardClick = async (catId: string, catName: string) => {
    setSelectedCatId(catId);
    setSelectedCatName(catName);
    open();
  };

  const handleCloseModal = async (selectedItemId:string) => {
    console.log(" selectedItemId", selectedItemId, " selectedItemId");
    if (selectedItemId) {
      console.log('Item selecionado, fazendo get...');
      console.log(selectedItemId);
      await getItem(selectedItemId);
      setSelectedItemId('');
    } else {
      console.log('Não foi possível obter o Id do Item, verifique se foi selecionado um item');
      console.log(selectedItemId);
      setSelectedItemId('');
    }
    close();
  };

  const handleSuccess = () => {
    setIsItemLent(true);
    setTimeout(() => {
      setIsItemLent(false);
    }, 3000);
  };

  const handleItemIdChange = (newItemId: string) => {
    setSelectedItemId(newItemId);
    const selectedItemId = newItemId;
    handleCloseModal(selectedItemId);
  };

  const notAvailables = () => {
    setNotAvailable(true);
    setTimeout(() => {
      setNotAvailable(false);
    }, 3000);
  };

  const getItem = async (selectedItemId: string) => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Token não encontrado');
      }
      const response = await fetch(`https://apicrcempresta.azurewebsites.net/api/Item/Get/${selectedItemId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao obter item');
      }

      const data = await response.json();
      if (data.isLend.toString() === 'true') {
        handleSuccess();
      } else {
        notAvailables();
      }
    } catch (error) {
      console.error('Erro ao obter item:', error);
    }
  };

  return (
    <>
      <Header />
      {isItemLent && (
        <Alert variant="light" title="Êxito!" color="teal" icon={<CheckIcon />}>
          Empréstimo realizado com sucesso!
        </Alert>
      )}
      {notAvailable && (
        <Alert variant="light" title="Erro!" color="red">
          Item não disponível para empréstimo.
        </Alert>
      )}
      <div className="content">
        <div className="cardscontainer">
          {categories.length === 0 ? (
            <p>Carregando categorias...</p>
          ) : (
            categories.map(category => (
              <Card
                key={category.id}
                onClick={() => handleCardClick(category.id, category.name)}
              >
                <span>{category.name}</span>
              </Card>
            ))
          )}
        </div>
      </div>
      {opened && (
        <Modale
          opened={opened}
          catName={selectedCatName}
          onClose={close}
          catId={selectedCatId}
          onSuccess={handleSuccess}
          onItemIdChange={handleItemIdChange}
        />
      )}
    </>
  );
}
