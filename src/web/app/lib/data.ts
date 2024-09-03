import { Category } from '@/util/types'
import { ItemLendingHistory } from "@/util/types";
export async function getAllCat(): Promise<any[]> {
    try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('Token não encontrado');
        }

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
    } catch (error) {
        console.error('Erro ao obter categorias:', error);
        throw error;
    }
}

export async function getCatToId(catId: string): Promise<Category> {
    try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('Token não encontrado');
        }
        const response = await fetch(`https://apicrcempresta.azurewebsites.net/api/Category/Get/${catId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error('Erro ao obter categoria por id');
        }
        const category: Category = await response.json();
        return category;
    } catch (error) {
        console.error('Erro ao obter categoria por id:', error);
        throw error;
    }
}

// export async function getAllItems(): Promise<any[]> {
//     try {
//         const token = localStorage.getItem('accessToken');
//         if (!token) {
//             throw new Error('Token não encontrado');
//         }

//         const response = await fetch('https://apicrcempresta.azurewebsites.net/api/Item/GetAll', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Erro ao obter itens');
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Erro ao obter itens:', error);
//         throw error;
//     }
// }

export async function getAllItemLending(): Promise<any[]> {
    try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('Token não encontrado');
        }

        const response = await fetch('https://apicrcempresta.azurewebsites.net/api/ItemLending/History', {
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

export const fetchLendingHistory = async (token: string): Promise<ItemLendingHistory[]> => {
    const response = await fetch(`https://apicrcempresta.azurewebsites.net/api/ItemLending/History/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Erro ao obter o histórico de empréstimos');
    }

    return await response.json();
};