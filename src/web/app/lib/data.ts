import { Category } from '@/util/types'
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