import jwt_decode, { JwtPayload } from 'jwt-decode';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface DecodedToken extends JwtPayload {
    // Adicione outras propriedades específicas do seu token JWT, se necessário
  }
  const JwtDecoder: React.FC = () => {
    const router = useRouter();
    const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);
  
    useEffect(() => {
      // Verifica se o token está presente no localStorage
      const token = localStorage.getItem('token');
  
      if (token) {
        try {
          // Decodifica o token JWT
          const decoded: DecodedToken = jwt_decode(token);
          // Define o token decodificado no estado
          setDecodedToken(decoded);
        } catch (error) {
          // Se ocorrer algum erro ao decodificar o token, redireciona para a página de login
          router.push('/login');
        }
      } else {
        // Se o token não estiver presente, redireciona para a página de login
        router.push('/login');
      }
    }, []);
  
    return (
      <>
        {/* Passe as informações decodificadas do token como uma propriedade */}
        {decodedToken && (
          <>{/* Aqui você pode renderizar componentes filhos com as informações decodificadas */}</>
        )}
      </>
    );
  };
  
  export default JwtDecoder;