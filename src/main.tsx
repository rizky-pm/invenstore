import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import router from './routes/index.tsx';
import MaxWidthWrapper from './components/MaxWidthWrapper.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MaxWidthWrapper>
      <RouterProvider router={router} />
    </MaxWidthWrapper>
  </React.StrictMode>
);
