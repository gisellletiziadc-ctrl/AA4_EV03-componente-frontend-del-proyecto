// Importa los componentes para manejar rutas

import { Routes, Route } from "react-router-dom"

// Importa las páginas de la aplicación
import Inicio from "./Inicio"
import Login from "./Login"
import Register from "./Register"
import Catalog from "./Catalog"

function App() {
  return (

     // Contenedor principal de las rutas de la aplicación
    <Routes>
      
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  )
}

export default App
