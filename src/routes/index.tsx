import About from '@/pages/About';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/about',
    element: (
      <ProtectedRoute>
        <About />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
]);

export default router;
