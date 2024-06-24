'use client';
import { useState, useEffect } from "react";
import { fetchUsers, editUser, deleteUser, createUser } from "../lib/actions";
import { User } from "@/util/types";
import { Alert, Loader, Table, Container, Center, Button, Modal, TextInput } from "@mantine/core";

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    const [newUserName, setNewUserName] = useState<string>('');
    const [newUserEmail, setNewUserEmail] = useState<string>('');

    const reloadData = async () => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            fetchUsers(token)
                .then((data: User[]) => {
                    setUsers(data);
                    setIsLoading(false);
                })
                .catch((error: Error) => {
                    console.error('Erro ao obter os usuários:', error);
                    setIsError(true);
                    setIsLoading(false);
                });
        } else {
            console.error('Token não encontrado');
            setIsError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        reloadData();
    }, []);

    const handleEdit = (user: User) => {
        setSelectedUser(user);
        setIsEditModalOpen(true);
    };


    const handleSaveEdit = async () => {
        console.log(selectedUser);
        if (selectedUser) {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    await editUser(token, selectedUser);
                    setIsEditModalOpen(false);
                } catch (error) {
                    console.error('Erro ao editar usuário:', error);
                    setIsError(true);
                }
            } else {
                console.error('Token não encontrado');
                setIsError(true);
            }
        }
    };

    const handleDelete = async (userId: string) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                await deleteUser(token, userId);
                reloadData();
            } catch (error) {
                console.error('Erro ao excluir usuário:', error);
                setIsError(true);
            }
        } else {
            console.error('Token não encontrado');
            setIsError(true);
        }
    };

    const handleCreate = async () => {
        const token = localStorage.getItem('accessToken');
        if (token && newUserName && newUserEmail) {
            try {
                await createUser(token, newUserName, newUserEmail);
                setIsCreateModalOpen(false);
                setNewUserName('');
                setNewUserEmail('');
                reloadData();
            } catch (error) {
                console.error('Erro ao criar usuário:', error);
                setIsError(true);
            }
        } else {
            console.error('Token não encontrado ou dados do usuário incompletos');
            setIsError(true);
        }
    };

    return (
        <>
            <Container size="md" style={{ marginTop: '20px' }}>
                {isLoading ? (
                    <Center>
                        <Loader size="xl" />
                    </Center>
                ) : (
                    <div>
                        <h1 className="text-xl" style={{ textAlign: 'center' }}>Lista de Usuários</h1>
                        <Button onClick={() => setIsCreateModalOpen(true)} color="green" style={{ marginBottom: '10px' }}>
                            Criar Usuário
                        </Button>
                        {isError ? (
                            <Alert color="red">Erro ao carregar usuários.</Alert>
                        ) : (
                            users.length === 0 ? (
                                <p style={{ textAlign: 'center' }}>Nenhum usuário encontrado.</p>
                            ) : (
                                <Table highlightOnHover className="bg-white rounded-3xl">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Email</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: 'center' }}>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <Button onClick={() => handleEdit(user)} color="blue" size="xs" style={{ marginRight: '5px' }}>Editar</Button>
                                                    <Button onClick={() => handleDelete(user.id)} color="red" size="xs">Excluir</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )
                        )}
                    </div>
                )}
                <Modal
                    opened={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    title="Editar Usuário"
                >
                    {selectedUser && (
                        <div>
                            <TextInput
                                label="Nome"
                                value={selectedUser.name}
                                onChange={(e) => setSelectedUser({ ...selectedUser, name: e.currentTarget.value })}
                            />
                            <TextInput
                                label="Email"
                                value={selectedUser.email}
                                onChange={(e) => setSelectedUser({ ...selectedUser, email: e.currentTarget.value })}
                            />
                            <Button onClick={handleSaveEdit} color="blue" style={{ marginTop: '10px' }}>Salvar</Button>
                        </div>
                    )}
                </Modal>

                <Modal
                    opened={isCreateModalOpen}
                    onClose={() => setIsCreateModalOpen(false)}
                    title="Criar Usuário"
                >
                    <TextInput
                        label="Nome do Usuário"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.currentTarget.value)}
                    />
                    <TextInput
                        label="Email do Usuário"
                        value={newUserEmail}
                        onChange={(e) => setNewUserEmail(e.currentTarget.value)}
                    />
                    <Button onClick={handleCreate} color="green" style={{ marginTop: '10px' }}>Criar</Button>
                </Modal>
            </Container>
        </>
    );
}