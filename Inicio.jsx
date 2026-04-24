import { useNavigate } from "react-router-dom"

function Inicio() {

  const navigate = useNavigate()

  return (
    <main className="main-container">

      {/* LADO IZQUIERDO */}
      <div className="left-side">

       {/* Texto de bienvenida */}
        <div className="welcome-box">
          ¡Bienvenido! Elige una opción para continuar
        </div>

        <img src="/images/robot.jpg" className="robot" />

      </div>

      {/* LADO DERECHO */}
      <div className="right-side">

        <button onClick={() => navigate("/login")}>
          Iniciar sesión
        </button>

        <button onClick={() => navigate("/register")}>
          Registrarse
        </button>

        <button onClick={() => navigate("/catalog")}>
          Solo mirar por ahora
        </button>

      </div>

    </main>
  )
}

export default Inicio
