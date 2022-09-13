import "./App.css"
import { useContext } from "react"
import { themeContext } from "./Context"
import React from "react"

import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
const Services = React.lazy(() => import("./components/Services/Services"))
const Portfolio = React.lazy(() => import("./components/Portfolio/Portfolio"))
const Contact = React.lazy(() => import("./components/Contact/Contact"))
const Footer = React.lazy(() => import("./components/Footer/Footer"))
const Payment = React.lazy(() => import("./components/Payment/Payment"))
const Features = React.lazy(() => import("./components/Features/Features"))

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <React.Suspense fallback={<>Loading...</>}>
        <Features />
      </React.Suspense>
      <React.Suspense fallback={<>Loading...</>}>
        <Services />
      </React.Suspense>
      <React.Suspense fallback={<>Loading...</>}>
        <Portfolio />
      </React.Suspense>
      <React.Suspense fallback={<>Loading...</>}>
        <Payment />
      </React.Suspense>
      <React.Suspense fallback={<>Loading...</>}>
        <Contact />
      </React.Suspense>
      <React.Suspense fallback={<>Loading...</>}>
        <Footer />
      </React.Suspense>
    </div>
  )
}

export default App
