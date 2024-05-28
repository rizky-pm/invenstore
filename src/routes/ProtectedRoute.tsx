import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth } from '@/firebase';
import Sidebar from '@/components/Sidebar';

interface IProtectedRoute {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) {
        navigate('/sign-in', { replace: true });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className='flex'>
      <Sidebar />
      {children}
    </main>
  );
};

export default ProtectedRoute;
