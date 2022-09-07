import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import Services from "./components/Services/Services"
import "./App.css"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { useContext } from "react"
import { themeContext } from "./Context"
import Features from "./components/Features/Features"
import Payment from "./components/Payment/Payment"
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
      <Features />
      <Services />
      <Portfolio />
      <Payment />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
