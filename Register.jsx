// Importa el hook para manejar estados

import { useState } from "react"

// Importa la navegación entre páginas
import { useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  // Estados para manejar los inputs y errores
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    // Expresión regular para validar seguridad de la contraseña
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/

    // Validar que la contraseña cumpla con el patrón
    if (!passwordPattern.test(password)) {
      setErrorMessage("La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.")
      return
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden")
      return
    }

    // Limpiar mensaje de error y navegar al catálogo
    setErrorMessage("")
    navigate("/catalog")
  }

  return (
    <main className="main-container">

      {/* LADO IZQUIERDO */}
      <div className="left-side">

        <div className="welcome-box">
          ¡Bienvenido a Hikaru!
          <br />
          Pregúntame lo que quieras
        </div>

        <img src="/images/robot1.jpg" className="robot" />

      </div>

      {/* LADO DERECHO */}
      <div className="right-side">

        <section className="register-container">

          <h2>Crear cuenta</h2>

          {/* Formulario de registro */}
          <form onSubmit={handleSubmit}>

            <label>Nombre(s)</label>
            <input type="text" placeholder="Tu nombre" required />

            <label>Apellido(s)</label>
            <input type="text" placeholder="Tus apellidos" required />

            <label>Fecha de nacimiento</label>
            <input type="date" required />

            <label>Correo electrónico</label>
            <input type="email" placeholder="ejemplo@email.com" required />

            <label>Contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Checkbox para mostrar/ocultar contraseña */}
            <label>
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              Mostrar contraseña
            </label>

            <p className="password-rules">
              La contraseña debe tener:
              <br />• mínimo 8 caracteres
              <br />• una letra mayúscula
              <br />• una letra minúscula
              <br />• un número
              <br />• un carácter especial
            </p>

            <label>Confirmar contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {/* Mostrar mensaje de error */}
            <p className="error">{errorMessage}</p>

            <button type="submit">Registrarse</button>

          </form>

        </section>

      </div>

    </main>
  )
}

export default Register