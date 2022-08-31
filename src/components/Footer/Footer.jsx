import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a id="mail-link" href="mailto: whisperinghotel@gmail.com">
          whisperinghotel@gmail.com
        </a>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Youtube color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
