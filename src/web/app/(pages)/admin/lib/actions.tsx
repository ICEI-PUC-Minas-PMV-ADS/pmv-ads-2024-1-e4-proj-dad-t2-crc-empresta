"use client";
import axios from 'axios';

const apiUrl = 'https://apicrcempresta.azurewebsites.net/api';
import { EditCategory } from "@/util/types";
import { User } from "@/util/types";

export async function getAllItems(): Promise<any[]> {
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

        if (!response.ok) {
            throw new Error('Erro ao obter itens');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter itens:', error);
        throw error;
    }
}

export const fetchCategories = async (token: string) => {
    const response = await fetch('https://apicrcempresta.azurewebsites.net/api/Category/GetAll', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Erro ao obter categorias');
    }

    const data = await response.json();
    return data;
};

export const editCategory = async (token: string, category: EditCategory) => {
    const response = await fetch(`https://apicrcempresta.azurewebsites.net/api/Category/Edit/${category.id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category),
    });

    if (!response.ok) {
        throw new Error('Erro ao editar categoria');
    }

    const data = await response.json();
    return data;
};

export const deleteCategory = async (token: string, categoryId: string) => {
    const response = await fetch(`https://apicrcempresta.azurewebsites.net/api/Category/Delete/${categoryId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Erro ao excluir categoria');
    }
};

export const createCategory = async (token: string, newCategory: { name: string }): Promise<EditCategory> => {
    const response = await fetch("https://apicrcempresta.azurewebsites.net/api/Category/Create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newCategory)
    });

    if (!response.ok) {
        throw new Error("Erro ao criar categoria");
    }

    const data = await response.json();
    return data;
};

export interface Category {
    id: string;
    name: string;
}

export async function fetchUsers(token: string): Promise<User[]> {
    const response = await fetch("https://apicrcempresta.azurewebsites.net/api/User/GetAllUsers", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Erro ao obter usuários");
    }

    const data = await response.json();
    return data;
}

export async function editUser(token: string, user: User): Promise<User> {
    const response = await fetch(`https://apicrcempresta.azurewebsites.net/api/User/Edit/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Erro ao editar usuário");
    }

    const data = await response.json();
    return data;
}

export async function deleteUser(token: string, userId: string): Promise<void> {
    const response = await fetch(`https://apicrcempresta.azurewebsites.net/api/User/Delete/${userId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}

export const createUser = async (token: string, name: string, email: string) => {
    const response = await axios.post(`https://apicrcempresta.azurewebsites.net/User/Create`, { name, email }, {
        headers: { "Authorization": `Bearer ${token}` }
    });
    return response.data;
};