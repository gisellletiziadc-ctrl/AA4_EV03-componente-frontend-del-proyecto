import { useState } from "react"

function Catalog() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>

      <h1>Hikaru - Catálogo</h1>

      {/* BOTÓN MENÚ */}
      <button onClick={() => setMenuOpen(!menuOpen)}>
        ☰ Menú
      </button>

      {/* MENÚ */}
      {menuOpen && (
        <ul>
          <li>Blusas</li>
          <li>Chaquetas</li>
          <li>Crop tops</li>
          <li>Faldas</li>
        </ul>
      )}

      {/* PRODUCTOS */}
      <div>
        <p>Suéter cuello redondo - $32.000</p>
        <p>Falda corta denim - $65.000</p>
        <p>Chaqueta oversize - $70.000</p>
        <p>Crop top - $20.000</p>
      </div>

    </main>
  )
}

export default Catalog