import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Checkout from '@/pages/Checkout';
import Signup from '@/pages/Signup';
import ProductDetails from '@/pages/ProductDetails';
<<<<<<< HEAD
import { RequireAuth } from '@/customHooks/requireAuth';
=======
import PrivateRoute from './PrivateRoute';
>>>>>>> 54cc45621411b74c23e5668ef119ab39b7fa6725

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: (
          <RequireAuth>
            <Products />
          </RequireAuth>
        ),
      },
      {
        path: '/product-details/:id',
        element: (
          <RequireAuth>
            <ProductDetails />
          </RequireAuth>
        ),
      },
      {
        path: '/checkout',
        element: (
<<<<<<< HEAD
          <RequireAuth>
            <Checkout />
          </RequireAuth>
=======
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
>>>>>>> 54cc45621411b74c23e5668ef119ab39b7fa6725
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
