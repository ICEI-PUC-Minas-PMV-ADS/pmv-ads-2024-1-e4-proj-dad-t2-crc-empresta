'use client';

import { useState, useEffect } from "react";
import { fetchCategories, editCategory, deleteCategory, createCategory } from "../lib/actions";
import { EditCategory } from "@/util/types";
import { Alert, Loader, Table, Container, Center, Button, Modal, TextInput, Group } from "@mantine/core";

export default function Categorias() {
    const [categories, setCategories] = useState<EditCategory[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedCategory, setSelectedCategory] = useState<EditCategory | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    const [newCategoryName, setNewCategoryName] = useState<string>("");

    const fetchAndSetCategories = async () => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const data = await fetchCategories(token);
                setCategories(data);
            } catch (error) {
                console.error('Erro ao obter as categorias:', error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        } else {
            console.error('Token não encontrado');
            setIsError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAndSetCategories();
    }, []);

    const handleEdit = (category: EditCategory) => {
        setSelectedCategory(category);
        setIsEditModalOpen(true);
    };

    const handleSaveEdit = async () => {
        if (selectedCategory) {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const updatedCategory = await editCategory(token, selectedCategory);
                    setCategories(categories.map(cat => cat.id === updatedCategory.id ? updatedCategory : cat));
                    setIsEditModalOpen(false);
                    fetchAndSetCategories(); // Recarrega os dados após salvar a edição
                } catch (error) {
                    console.error('Erro ao editar categoria:', error);
                    setIsError(true);
                }
            } else {
                console.error('Token não encontrado');
                setIsError(true);
            }
        }
    };

    const handleDelete = async (categoryId: string) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                await deleteCategory(token, categoryId);
                setCategories(categories.filter(cat => cat.id !== categoryId));
            } catch (error) {
                console.error('Erro ao excluir categoria:', error);
                setIsError(true);
            }
        } else {
            console.error('Token não encontrado');
            setIsError(true);
        }
    };

    const handleCreate = async () => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const newCategory = await createCategory(token, { name: newCategoryName });
                setCategories([...categories, newCategory]);
                setIsCreateModalOpen(false);
                setNewCategoryName("");
            } catch (error) {
                console.error('Erro ao criar categoria:', error);
                setIsError(true);
            }
        } else {
            console.error('Token não encontrado');
            setIsError(true);
        }
    };

    return (
        <Container size="md" style={{ marginTop: '20px' }}>
            {isLoading ? (
                <Center>
                    <Loader size="xl" />
                </Center>
            ) : (
                <div>
                    <h1 className="text-xl" style={{ textAlign: 'center' }}>Lista de Categorias</h1>
                    <Group style={{ marginBottom: '20px' }}>
                        <Button onClick={() => setIsCreateModalOpen(true)} color="green">Criar Categoria</Button>
                    </Group>
                    {isError ? (
                        <Alert color="red">Erro ao carregar categorias.</Alert>
                    ) : (
                        categories.length === 0 ? (
                            <p style={{ textAlign: 'center' }}>Nenhuma categoria encontrada.</p>
                        ) : (
                            <>
                                <Table highlightOnHover className="bg-white rounded-3xl">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: 'center' }}>
                                        {categories.map((category) => (
                                            <tr key={category.id}>
                                                <td>{category.id}</td>
                                                <td>{category.name}</td>
                                                <td>
                                                    <Button onClick={() => handleEdit(category)} color="blue" size="xs" style={{ marginRight: '5px' }}>Editar</Button>
                                                    <Button onClick={() => handleDelete(category.id)} color="red" size="xs">Excluir</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                                <Modal
                                    opened={isEditModalOpen}
                                    onClose={() => setIsEditModalOpen(false)}
                                    title="Editar Categoria"
                                >
                                    {selectedCategory && (
                                        <div>
                                            <TextInput
                                                label="Nome"
                                                value={selectedCategory.name}
                                                onChange={(e) => setSelectedCategory({ ...selectedCategory, name: e.currentTarget.value })}
                                            />
                                            <Button onClick={handleSaveEdit} color="blue" style={{ marginTop: '10px' }}>Salvar</Button>
                                        </div>
                                    )}
                                </Modal>

                                <Modal
                                    opened={isCreateModalOpen}
                                    onClose={() => setIsCreateModalOpen(false)}
                                    title="Criar Categoria"
                                >
                                    <div>
                                        <TextInput
                                            label="Nome"
                                            value={newCategoryName}
                                            onChange={(e) => setNewCategoryName(e.currentTarget.value)}
                                        />
                                        <Button onClick={handleCreate} color="green" style={{ marginTop: '10px' }}>Criar</Button>
                                    </div>
                                </Modal>
                            </>
                        )
                    )}
                </div>
            )}
        </Container>
    );
}
