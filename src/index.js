import ReactDOM from "react-dom"
import React from "react"
import App from "./App"
import { ThemeProvider } from "./Context"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const Gallery = React.lazy(() => import("./Gallery"))
const Terms = React.lazy(() => import("./terms&condition/Terms"))
const Privacy = React.lazy(() => import("./privacypolicy/Privacy"))

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/gallery/:roomName"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Gallery />
            </React.Suspense>
          }
        />
        <Route
          path="/terms"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Terms />
            </React.Suspense>
          }
        />
        <Route
          path="/privacy"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Privacy />
            </React.Suspense>
          }
        />
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
