import React from "react"
import "./Footer.css"
import Wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Youtube from "@iconscout/react-unicons/icons/uil-youtube"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a id="link" href="mailto: whisperinghotel@gmail.com">
          whisperinghotel@gmail.com
        </a>
        <Link id="link" to="/terms">
          Terms and Conditions
        </Link>
        <Link id="link" to="/privacy">
          Privacy Policy
        </Link>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Youtube color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  )
}

export default Footer
