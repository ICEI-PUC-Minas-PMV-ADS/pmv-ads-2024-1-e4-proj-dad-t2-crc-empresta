'use client'

export async function authenticate(name: string, password: string): Promise<string> {
  try {
    const response = await fetch('https://apicrcempresta.azurewebsites.net/api/User/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });

    if (!response.ok) {
      throw new Error('Credenciais inválidas');
    }

    const token = await response.text();
    console.log(token)

    localStorage.setItem('accessToken', token);

    return token;
  } catch (error) {
    console.error('Erro ao autenticar:', error);
    throw error;
  }
}
export async function isAuthenticated(): Promise<boolean> {
  try {
    const token = localStorage.getItem('accessToken');
    return !!token;
  } catch (error) {
    console.error('Erro ao verificar autenticação:', error);
    throw error;
  }
}

export async function lendItem(itemId: string): Promise<void> {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      throw new Error('Token não encontrado');
    }

    const response = await fetch(`https://apicrcempresta.azurewebsites.net/api/ItemLending/Lend/${itemId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),


    });
    console.log(response)
    if (!response.ok) {
      throw new Error('Erro ao registrar empréstimo');
    }
    window.location.reload();
  } catch (error) {
    console.error('Erro ao emprestar item:', error);
    throw error;
  }
}

export async function returnItem(itemId: string): Promise<void> {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      throw new Error('Token não encontrado');
    }

    const response = await fetch(`https://apicrcempresta.azurewebsites.net/api/ItemLending/Return/${itemId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao realizar a devolução');
    }

  } catch (error) {
    console.error('Erro ao devolver item:', error);
    throw error;
  }
}




