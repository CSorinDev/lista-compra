import { NavLink } from "react-router";
import useLogin from "../hooks/useLogin";
import { LoaderCircle } from "lucide-react";

export default function LoginPage() {
  const { state, loginAction, loading } = useLogin()

  return (
    <form action={loginAction}>
      <h1>Inicio de Sesión</h1>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" />
      <button type="submit" disabled={loading}>
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <LoaderCircle className="animate-spin" /> Iniciando Sesión...
          </span>
        ) : (
          'Iniciar Sesión'
        )}
      </button>
      {state.error && (
        <p className="text-danger bg-danger/10 rounded-lg p-2 text-center text-sm italic">
          {state.error}
        </p>
      )}
      {state.success && (
        <p className="text-success bg-success/10 rounded-lg p-2 text-center text-sm italic">
          Usuario logueado correctamente
        </p>
      )}
      <p>
        ¿No tienes cuenta? <NavLink to="/register">Regístrate</NavLink>
      </p>
    </form>
  )
}