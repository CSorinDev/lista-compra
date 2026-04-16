import { Handbag, LogOut, Moon, Sun } from 'lucide-react'
import { NavLink } from 'react-router'
import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthContext'
import Loading from '../components/Loading'
import useLogout from '../hooks/useLogout'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const { user, loading: authLoading } = useAuth()
  const navLinks = user
    ? [
        { name: 'Inicio', path: '/' },
        { name: 'Mis Listas', path: '/listas' },
      ]
    : [
        { name: 'Inicio', path: '/' },
        { name: 'Iniciar Sesión', path: '/login' },
      ]
  const { logoutAction, loading: logoutLoading } = useLogout()

  if (authLoading || logoutLoading) return <Loading />

  return (
    <header className="flex items-center justify-between p-4">
      <nav className="w-full">
        <ul className="flex w-full items-center gap-2">
          <li className="flex-1">
            <NavLink to="/">
              <Handbag />
            </NavLink>
          </li>
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? 'after:w-full' : ''} after:bg-bg text-primary relative p-2 after:absolute after:bottom-1 after:left-0 after:block after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full`
                }
                to={path}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={toggleTheme} className="ml-2 flex items-center gap-2">
        <span className="text-primary/10">|</span>
        {theme === 'dark' ? (
          <Moon className="hover:bg-primary/10 box-content cursor-pointer rounded-full p-2 transition-all duration-300 hover:text-yellow-700" />
        ) : (
          <Sun className="hover:bg-primary/50 box-content cursor-pointer rounded-full p-2 transition-all duration-300 hover:text-yellow-500" />
        )}
      </button>
      {user && (
        <LogOut
          className="text-danger bg-danger/10 hover:bg-danger/30 mx-2 box-content cursor-pointer rounded-full p-2 transition-all duration-300"
          onClick={logoutAction}
        />
      )}
    </header>
  )
}
