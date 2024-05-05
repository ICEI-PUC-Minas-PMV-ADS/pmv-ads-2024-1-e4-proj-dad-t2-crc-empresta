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
      
      
      localStorage.setItem('accessToken', token);
  
      return token;
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      throw error;
    }
  }
  