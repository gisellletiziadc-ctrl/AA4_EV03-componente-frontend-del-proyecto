import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()
  const [error, setError] = useState("")
//Mostrar u ocultar la contraseña
  const [showPassword, setShowPassword] = useState(false)
//Se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    //Verifica conexión a internet
    if (!navigator.onLine) {
      setError("No hay conexión a internet.")
    } else {
      navigate("/catalog")
    }
  }

  return (
    <main>

      <h2>Iniciar sesión</h2>

      <form id="register-form" onSubmit={handleSubmit}>

        <label>Correo electrónico</label>
        <input type="email" placeholder="ejemplo@email.com" required />

        <p>{error}</p>

        <label>Contraseña</label>

        {/* Input de contraseña con opción de mostrar/ocultar */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="********"
          required
        />

        {/* Checkbox para mostrar u ocultar la contraseña */}
        <label>
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          Mostrar contraseña
        </label>

        <button type="submit">Iniciar sesión</button>

      </form>

    </main>
  )
}

export default Login