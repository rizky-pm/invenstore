import About from '@/pages/About';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
]);

export default router;
