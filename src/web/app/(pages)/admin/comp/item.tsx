import { useState, useEffect, ChangeEvent } from 'react';
import { Button, Modal, TextInput } from '@mantine/core'; // Removi o import do Checkbox, pois não está sendo utilizado

type Item = {
  id: string;
  name: string;
  code: string;
  categoryId: string;
};

const ItemCrud = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>({
    id: '',
    name: '',
    code: '',
    categoryId: ''
  });
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Token não encontrado');
      }
      const response = await fetch('https://apicrcempresta.azurewebsites.net/api/Item/GetAll', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleCreateItem = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Token não encontrado');
      }
      await fetch('https://apicrcempresta.azurewebsites.net/api/Item/Create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem),
      });
      setNewItem({
        id: '',
        name: '',
        code: '',
        categoryId: ''
      });
      fetchItems();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const handleEditItem = async () => {
    if (!editingItem) return;
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Token não encontrado');
      }
      await fetch(`https://apicrcempresta.azurewebsites.net/api/Item/Edit/${editingItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editingItem),
      });
      setEditingItem(null);
      setIsModalOpen(false);
      fetchItems();
    } catch (error) {
      console.error('Error editing item:', error);
    }
  };

  const handleDeleteItem = async (id: string) => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Token não encontrado');
      }
      await fetch(`https://apicrcempresta.azurewebsites.net/api/Item/Delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Itens para empréstimo</h1>
      <div className="mb-4">
        <TextInput
          placeholder="Nome"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
          className="mb-2"
          radius={10}
        />
        <TextInput
          placeholder="Código"
          name="code"
          value={newItem.code}
          onChange={handleInputChange}
          className="mb-2"
          radius={10}
        />
        <TextInput
          placeholder="ID da Categoria"
          name="categoryId"
          value={newItem.categoryId}
          onChange={handleInputChange}
          className="mb-2"
          radius={10}
        />
        <Button onClick={handleCreateItem} className="mt-2">Adicionar Item</Button>
      </div>
      <ul className="list-disc pl-5 bg-white rounded">
        {items.map(item => (
          <li key={item.id} className="mb-4 border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="text-gray-500">Código: {item.code}</p>
              </div>
              <div>
                <Button onClick={() => { setEditingItem(item); setIsModalOpen(true); }} className="ml-2" radius={10}>Editar</Button>
                <Button onClick={() => handleDeleteItem(item.id)} color="red" className="ml-2" radius={10}>Deletar</Button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} title="Editar Item">
        {editingItem && (
          <div>
            <TextInput
              placeholder="Nome"
              name="name"
              value={editingItem.name}
              onChange={(e) => setEditingItem({ ...editingItem, name: e.currentTarget.value })}
              className="mb-2"
            />
            <TextInput
              placeholder="Código"
              name="code"
              value={editingItem.code}
              onChange={(e) => setEditingItem({ ...editingItem, code: e.currentTarget.value })}
              className="mb-2"
            />
            <TextInput
              placeholder="ID da Categoria"
              name="categoryId"
              value={editingItem.categoryId}
              onChange={(e) => setEditingItem({ ...editingItem, categoryId: e.currentTarget.value })}
              className="mb-2"
            />
            <Button onClick={handleEditItem} className="mt-2">Salvar</Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ItemCrud;
