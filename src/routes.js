import HomePage from './pages/HomePage.jsx'
import Layout from './layouts/Layout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import GuestRoute from './layouts/GuestRoute.jsx'
import PrivateRoute from './layouts/PrivateRoute.jsx'
import ListasPage from './pages/ListasPage.jsx'

export const routes = [
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        Component: GuestRoute,
        children: [
          {
            path: '/login',
            Component: LoginPage,
          },
          {
            path: '/register',
            Component: RegisterPage,
          },
        ],
      },
      {
        Component: PrivateRoute,
        children: [
          {
            path: '/listas',
            Component: ListasPage,
          },
        ],
      }
    ],
  },
]
