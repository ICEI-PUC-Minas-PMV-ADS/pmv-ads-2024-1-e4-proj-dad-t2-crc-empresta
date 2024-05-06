// components/ProtectedRouteWrapper.tsx
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Rout{
    children: React.ReactNode;
}

const ProtectedRouteWrapper: React.FC<Rout> = ({ children}) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/login');
    }
    
  }, []);

  return <>{children}</>;
};

export default ProtectedRouteWrapper;
