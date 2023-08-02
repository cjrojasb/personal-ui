import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import ErrorPage from 'components/pages/ErrorPage';
import Root from 'components/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: ROUTES.map(({ path, element }) => ({
      path,
      element,
    })),
  },
]);

export default router;
