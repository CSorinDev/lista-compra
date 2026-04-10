import { NavLink } from "react-router";

export default function LoginPage() {
  return (
    <form action="">
      <h1>Inicio de Sesión</h1>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Iniciar Sesión</button>
      <p>
        ¿No tienes cuenta? <NavLink to="/register">Regístrate</NavLink>
      </p>
    </form>
  )
}