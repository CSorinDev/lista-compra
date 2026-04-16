import HomePage from './pages/HomePage.jsx'
import Layout from './layouts/Layout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import GuestRoute from './layouts/GuestRoute.jsx'

export const routes = [
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
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
]
