import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import "bootswatch/dist/solar/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App title="React & TypeScript" />
  </React.StrictMode>,
)
