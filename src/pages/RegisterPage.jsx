import { NavLink } from "react-router";

export default function RegisterPage() {
  return (
    <form action="">
      <h1>Registro de usuario</h1>
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" />
      <label htmlFor="confirmPassword">Confirmar Contraseña</label>
      <input type="password" name="confirmPassword" id="confirmPassword" />
      <button type="submit">Registrarse</button>
      <p>
        ¿Ya tienes cuenta? <NavLink to="/login">Inicia Sesión</NavLink>
      </p>
    </form>
  )
}