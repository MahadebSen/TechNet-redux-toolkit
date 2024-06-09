import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import { SkeletonTheme } from 'react-loading-skeleton';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </React.StrictMode>
  </SkeletonTheme>
);
