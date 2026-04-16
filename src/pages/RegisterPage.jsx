import { NavLink } from 'react-router'
import useRegister from '../hooks/useRegister.jsx'
import { Loader, Loader2, LoaderCircle } from 'lucide-react'

export default function RegisterPage() {
  const { state, registerAction, loading } = useRegister()

  return (
    <form action={registerAction}>
      <h1>Registro de usuario</h1>
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" />
      <label htmlFor="confirmPassword">Confirmar Contraseña</label>
      <input type="password" name="confirmPassword" id="confirmPassword" />
      <button type="submit" disabled={loading}>
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <LoaderCircle className="animate-spin" /> Registrando...
          </span>
        ) : (
          'Registrarse'
        )}
      </button>
      {state.error && (
        <p className="text-danger bg-danger/10 rounded-lg p-2 text-center text-sm italic">
          {state.error}
        </p>
      )}
      {state.success && (
        <p className="text-success bg-success/10 rounded-lg p-2 text-center text-sm italic">
          Usuario registrado correctamente
        </p>
      )}
      <p>
        ¿Ya tienes cuenta? <NavLink to="/login">Inicia Sesión</NavLink>
      </p>
    </form>
  )
}
