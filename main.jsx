// Importa la librería principal de React

import React from 'react'

// Importa ReactDOM 
import ReactDOM from 'react-dom/client'

// Importa el componente principal de la aplicación
import App from './App.jsx'

// Importa el enrutador
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

   // BrowserRouter permite navegar entre páginas sin recargar
  <BrowserRouter>
    <App />
  </BrowserRouter>
)