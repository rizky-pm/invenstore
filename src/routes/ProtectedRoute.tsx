import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth } from '@/firebase';

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

  return <>{children}</>;
};

export default ProtectedRoute;
