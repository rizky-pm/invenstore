import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import MaxWidthWrapper from './components/MaxWidthWrapper.tsx';
import Providers from './components/Providers.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MaxWidthWrapper>
      <Providers />
    </MaxWidthWrapper>
  </React.StrictMode>
);
