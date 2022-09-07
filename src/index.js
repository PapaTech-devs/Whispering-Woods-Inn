import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ThemeProvider } from "./Context"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Gallery from "./Gallery"
import Terms from "./terms&condition/Terms"
import Privacy from "./privacypolicy/Privacy"

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery/:roomName" element={<Gallery />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
