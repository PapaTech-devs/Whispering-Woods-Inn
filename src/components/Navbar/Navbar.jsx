import Toggle from "../Toggle/Toggle"
import "./Navbar.css"
import { Link } from "react-scroll"

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Whispering Woods Inn</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Rooms
              </Link>
            </li>
            <li>
              <Link to="features" spy={true} smooth={true}>
                Features
              </Link>
            </li>
            <li>
              <Link to="pictures" spy={true} smooth={true}>
                Pictures
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default navbar
